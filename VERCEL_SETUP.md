# Vercel Deployment Setup Guide

## Prerequisites
- Project deployed to Vercel
- GitHub repository connected to Vercel
- Vercel account access

## Local SSR troubleshooting

- Run `npm run dev` and allow the first server render to finish before refreshing.
- A browser disconnect can produce `aborted` / `ECONNRESET` while SSR is in progress.
  The server entry and error middleware recognize cancellation using the incoming
  request's abort signal and return a bodyless `499 Client Closed Request` rather
  than rendering an application-error page. TanStack/h3 may still log the original
  abort internally; genuine failures on live requests remain logged HTTP 500s.
- Vite 8 resolves TypeScript paths natively. The Vite config removes the legacy
  paths plugin injected by the Lovable wrapper and enables `resolve.tsconfigPaths`.
- Run the SSR regression checks with
  `node --experimental-vm-modules --test scripts/test-ssr.mjs`.

## Required Environment Variables in Vercel Dashboard

**IMPORTANT**: Do NOT commit `.env.local` to GitHub. Use Vercel's Environment Variables dashboard instead.

### Steps to Configure Environment Variables in Vercel:

1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Environment Variables**
3. Add the following variables (set for `Production`, `Preview`, and `Development`):

### Supabase Configuration
```
VITE_SUPABASE_URL = https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY = your-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY = your-service-role-key
SUPABASE_SERVICE_ROLE_KEY = your-service-role-key
DATABASE_URL = postgresql://user:password@host:port/database
```

### Email (SMTP) Configuration
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = noreply@dmhca.in
SMTP_PASS = your-app-password
SMTP_FROM = noreply@dmhca.in
```

### Razorpay Payment Gateway
```
RAZORPAY_KEY_ID = rzp_live_xxxxx
RAZORPAY_KEY_SECRET = xxxxx
VITE_RAZORPAY_KEY_ID = rzp_live_xxxxx
```

### Loan Partner
```
LOAN_PARTNER_URL = https://app.jodo.in/your-partner/login
VITE_LOAN_PARTNER_URL = https://app.jodo.in/your-partner/login
```

### Security
```
SESSION_SECRET = your-secure-random-string-32-chars-minimum
```

## Important Notes

✅ **DO**:
- Store sensitive credentials in Vercel's Environment Variables dashboard
- Use different credentials for Production vs Development environments
- Rotate credentials periodically
- Keep `.env.local` in `.gitignore` (already configured)

❌ **DON'T**:
- Commit `.env.local` to GitHub
- Hardcode credentials in code
- Share credentials via chat or email
- Use the same credentials for multiple environments

## Deployment Checklist

- [ ] All environment variables configured in Vercel dashboard
- [ ] `.env.local` exists locally but is in `.gitignore`
- [ ] `.env.example` committed to GitHub (no real credentials)
- [ ] Build succeeds locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] TeleCRM integration disabled (confirmed in code)
- [ ] Vercel deployment hooks are active
- [ ] GitHub branch is connected to Vercel

## Troubleshooting

### Build Fails in Vercel but Works Locally
- Check Environment Variables are set in Vercel dashboard
- Ensure all required variables are present
- Check build logs in Vercel dashboard for specific errors

### Supabase Connection Errors
- Verify `VITE_SUPABASE_URL` format
- Confirm `VITE_SUPABASE_ANON_KEY` is valid
- Test connection locally with `npm run dev`

### API/Function Errors
- Check `DATABASE_URL` is valid
- Verify `SESSION_SECRET` is set and long enough
- Review Vercel function logs for runtime errors

### CME Registration and Razorpay Checkout
- The registration dialog scrolls as a single panel and follows the browser's
  visual viewport when the mobile keyboard opens. Opening it does not
  automatically focus a text field or open the keyboard.
- The registration dialog unmounts during Razorpay checkout, releasing its
  focus trap and pointer lock so the payment iframe and **Refresh QR** control
  remain interactive. Cancelling checkout restores the entered details.
- A failed checkout-script download can be retried without creating an order
  first. Payment success is shown only after server-side verification.
- After verified payment, mobile and desktop show a thank-you confirmation
  explaining that the team will provide the event link before the event starts.
- If verification fails after a payment response, the form shows the payment
  reference and support instructions instead of prompting for another payment.
- Razorpay generates and expires the UPI QR. Verify that UPI is enabled and
  automatic payment capture is configured in the merchant dashboard. The server
  only confirms registrations for captured INR 599 payments.
- Event checkout uses a runtime payment-method configuration showing only UPI
  and cards, with default blocks disabled. Server verification also checks the
  payment method; wallets, EMI, netbanking, and pay-later are not accepted.
- If **Refresh QR** is clickable but does not produce a scannable QR, inspect
  the failed Razorpay iframe request in the browser Network panel. Record only
  the HTTP status, error code/description, and request ID; do not share keys,
  tokens, personal details, or full request/response payloads. Check UPI/QR
  availability with Razorpay support using the request ID. Runtime method
  configuration cannot enable a merchant feature or fix a gateway/network error.
- Before release, check portrait and landscape layouts, keyboard scrolling,
  checkout cancellation/retry, and QR refresh. Simulated checkout tests do not
  verify live QR generation or the transfer of funds; use Razorpay test mode or
  an explicitly approved live transaction for end-to-end payment validation.

## Re-deployment After Changes

1. Make changes locally
2. Test locally: `npm run build` and `npm run lint`
3. Commit and push to GitHub
4. Vercel auto-deploys (webhook configured)
5. Monitor Vercel deployment logs

**Last Updated**: 2026-10-06

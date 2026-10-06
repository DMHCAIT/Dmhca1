# Vercel Deployment Setup Guide

## Prerequisites
- Project deployed to Vercel
- GitHub repository connected to Vercel
- Vercel account access

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

## Re-deployment After Changes

1. Make changes locally
2. Test locally: `npm run build` and `npm run lint`
3. Commit and push to GitHub
4. Vercel auto-deploys (webhook configured)
5. Monitor Vercel deployment logs

**Last Updated**: 2026-10-06

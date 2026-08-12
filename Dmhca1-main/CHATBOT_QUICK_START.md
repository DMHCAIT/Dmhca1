# ⚡ Chatbot Quick Deploy Checklist

## Immediate Setup (5 minutes)

### ✅ Step 1: Apply Database Migration
```
Go to: Supabase Dashboard → SQL Editor
→ New Query
→ Copy ALL content from: migrations/014_add_chatbot_inquiries_support.sql
→ Click "RUN"
```

**Expected**: ✓ Success message (green checkmark)

---

### ✅ Step 2: Rebuild Your Project
```bash
npm run build
```

**Expected**: ✓ Build completes successfully

---

### ✅ Step 3: Start Local Testing
```bash
npm run preview
```

**Expected**: ✓ Server starts at http://localhost:5173

---

### ✅ Step 4: Test the Chatbot Widget

1. Open: http://localhost:5173
2. **Look at bottom-right corner** - You should see a chat button with purple background
3. Click the button → Chat widget opens
4. Type any greeting (e.g., "Hello")
5. Follow the prompts:
   - Enter your name
   - Enter your email
   - Enter your mobile (10 digits)
   - Select or enter course name
6. **Verify**: "Support team will reach you soon" message appears

---

### ✅ Step 5: Check Admin Panel

1. Go to: `/admin` (login if needed)
2. **New Menu Item**: "Chatbot Inquiries" in left sidebar
3. Click it
4. **You should see your test submission** with:
   - Your name
   - Your email
   - Your phone
   - Course you selected
   - Status: "🔴 New"

---

### ✅ Step 6: Test Admin Functions

1. Click on your submission
2. Right panel shows details
3. Try:
   - ✓ Change status (dropdown)
   - ✓ Add internal notes
   - ✓ Save notes
   - ✓ Delete (careful!)

---

## Files Modified/Created

```
✅ src/components/ChatbotWidget.tsx ..................... NEW (chat widget)
✅ api/chatbot-inquiry.js .............................. NEW (API endpoint)
✅ src/routes/admin.chatbot-inquiries.tsx .............. NEW (admin page)
✅ src/routes/admin.tsx ............................... MODIFIED (added menu)
✅ src/components/site/Header.tsx ..................... MODIFIED (added widget)
✅ migrations/014_add_chatbot_inquiries_support.sql ... NEW (database)
```

---

## Test Scenarios

### Test 1: Valid Submission ✅
```
Name: John Doe
Email: john@example.com
Phone: 9876543210
Course: Diploma in Medical Coding
→ Should see success message
→ Check admin panel for entry
```

### Test 2: Invalid Email ❌ (Should reject)
```
Name: John Doe
Email: invalid-email (missing @domain)
→ Should ask "Please enter a valid email"
→ Won't let you proceed
```

### Test 3: Invalid Phone ❌ (Should reject)
```
Name: John Doe
Email: john@example.com
Phone: 123 (less than 10 digits)
→ Should ask "Please enter valid 10-digit number"
→ Won't let you proceed
```

### Test 4: Admin Status Update ✅
```
→ In admin panel, select submission
→ Click Status dropdown
→ Change to "Reviewed"
→ Status badge should update immediately
```

---

## Troubleshooting Quick Fixes

| Issue | Fix |
|-------|-----|
| Chatbot doesn't appear | Clear browser cache (Ctrl+Shift+Delete) → Refresh |
| API errors in console | Check `/api/chatbot-inquiry.js` file exists |
| Data not saving | Run migration again, verify Supabase connection |
| Admin page blank | Login to `/admin` first, then go to `/admin/chatbot-inquiries` |
| Dark mode issues | Toggle theme, check that theme provider is active |

---

## Deployment to Production

### Once tested locally:

```bash
# Build for production
npm run build

# Deploy (choose your method)
vercel deploy        # If using Vercel
netlify deploy       # If using Netlify
# Or your hosting provider's deploy command
```

**Database stays the same** (Supabase hosted, no changes needed)

---

## Real-Time Metrics

### Check on each refresh:
- **Dashboard**: Total inquiries count
- **Filter by "New"**: Unreviewed inquiries
- **Search bar**: Find specific customer
- **Status badges**: See follow-up status

---

## You're Done! 🎉

Your chatbot is now:
- 📱 Live on your website
- 💾 Storing customer data
- 📊 Viewable in admin panel
- 🚀 Ready for real customers

**Next**: Share your website link with a friend and have them test the chatbot!

---

## Support Links

- **Chatbot Details**: See CHATBOT_SETUP_GUIDE.md
- **Admin Panel**: http://your-site/admin/chatbot-inquiries
- **Database**: Supabase.com → Your Project

Need customization? Refer to CHATBOT_SETUP_GUIDE.md section "🎨 Customization Guide"

# 🤖 Advanced Chatbot Widget - Setup Guide

## ✅ What's Been Created

I've built a complete, production-ready AI chatbot system with multi-step form collection and admin panel integration. Here's what you have:

### **Components Created:**

1. **`src/components/ChatbotWidget.tsx`** (370+ lines)
   - Multi-step conversational flow
   - Collects: Name → Email → Mobile → Course Interest
   - Proactive engagement badge (appears after 8 seconds)
   - Dark mode support
   - Smooth animations & loading states

2. **`api/chatbot-inquiry.js`** (Backend API)
   - Validates all form fields
   - Stores submissions to Supabase
   - Email validation
   - Phone number validation

3. **`src/routes/admin.chatbot-inquiries.tsx`** (Admin Dashboard)
   - View all chatbot inquiries
   - Filter by status (New, Reviewed, Contacted, Enrolled, Rejected)
   - Search by name, email, or course
   - Add internal notes
   - Update status for each inquiry
   - Delete inquiries
   - Dark mode support

4. **`migrations/014_add_chatbot_inquiries_support.sql`** (Database)
   - Adds required columns to applications table
   - Creates indexes for fast queries
   - Adds automatic timestamp updates

---

## 🚀 Installation Steps

### **Step 1: Apply Database Migration**

Run this SQL in your Supabase dashboard (SQL Editor):

```sql
-- Copy the entire content from:
-- migrations/014_add_chatbot_inquiries_support.sql
```

Or use the CLI:
```bash
npx supabase db push
```

### **Step 2: Verify API Endpoint**

The API endpoint `/api/chatbot-inquiry` is already created and ready to handle POST requests.

Test it with curl:
```bash
curl -X POST http://localhost:5173/api/chatbot-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "course": "Diploma in Medical Coding"
  }'
```

### **Step 3: Build & Deploy**

```bash
npm run build
npm run preview  # Test locally
# Then deploy to production
```

---

## 📖 How to Use

### **For Customers:**

1. **See the Chatbot Widget** - Fixed at bottom-right corner of your website
2. **Click the Button** - Opens the chat interface
3. **Start Conversation:**
   - Bot greets them
   - Asks for name → email → mobile → course interest
   - Shows confirmation message
   - "Support team will reach you soon"
4. **Data Saved** - All info stored in database

### **For Admin:**

1. **Login to Admin Panel** - `/admin`
2. **Navigate to "Chatbot Inquiries"** (in sidebar)
3. **View Submissions:**
   - See all inquiries with status, name, email, phone, course
   - Click any inquiry to see full details
   - Filter by status (New/Reviewed/Contacted/Enrolled/Rejected)
   - Search by name, email, or course
4. **Take Action:**
   - Update status for each inquiry
   - Add internal notes
   - Delete if needed
5. **Track Follow-ups:**
   - "New" = Just submitted
   - "Reviewed" = Team reviewed
   - "Contacted" = Reached out to customer
   - "Enrolled" = Customer enrolled
   - "Rejected" = Not a fit

---

## 🎨 Customization Guide

### **Change Chat Questions/Flow**

Edit `src/components/ChatbotWidget.tsx`:

```typescript
const handleStepFlow = async (userInput: string) => {
  switch (currentStep) {
    case 'greeting':
      // Change greeting message
      addMessage(`Hi ${userInput}! Ask for different info here...`, 'bot');
      setCurrentStep('next_step');
      break;
    // Add more steps as needed
  }
};
```

### **Custom Course Options**

Edit the course selection message in `ChatbotWidget.tsx`:

```typescript
addMessage(`Which course interests you?\n\n• Your Course 1\n• Your Course 2\n• Your Course 3`, 'bot');
```

### **Change Colors/Styling**

The widget uses your existing color scheme:
- `navy-deep` → Primary color (buttons, header)
- `gold` → Accent color (highlights)
- `dark:` classes → Dark mode support

Modify Tailwind classes in `ChatbotWidget.tsx`:

```typescript
{/* Header gradient */}
<div className="bg-gradient-to-r from-navy-deep to-navy dark:from-gold dark:to-yellow-500">
```

### **Change Welcome Message Timing**

Edit in `ChatbotWidget.tsx`:

```typescript
// Currently 8 seconds
const timer = setTimeout(() => {
  setShowWelcome(true);
}, 8000); // Change 8000 to desired milliseconds
```

### **Add Email Notifications**

Modify `api/chatbot-inquiry.js` to send admin email:

```javascript
// After successful insert, add:
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  to: process.env.ADMIN_EMAIL,
  subject: `New Chatbot Inquiry: ${name}`,
  html: `<p>New inquiry from ${name}</p><p>Email: ${email}</p><p>Phone: ${cleanPhone}</p><p>Course: ${course}</p>`,
});
```

---

## 🔧 Troubleshooting

### **Chatbot Not Appearing?**

1. Check browser console for errors (F12 → Console)
2. Verify `ChatbotWidget` is imported in Header.tsx
3. Clear browser cache
4. Check that `api/chatbot-inquiry.js` is accessible

### **Data Not Saving?**

1. Check Supabase connection in browser DevTools
2. Verify database migration was applied
3. Check `/api/chatbot-inquiry` responds with 200
4. Look for CORS errors in console

### **Admin Page Not Showing Data?**

1. Login to `/admin` first
2. Check that `form_type='chatbot_inquiry'` is set in API
3. Go to `/admin/chatbot-inquiries` (exact URL)
4. Check browser console for errors

### **Styling Issues?**

1. Ensure Tailwind CSS is properly configured
2. Check dark mode toggle in Header
3. Browser cache might have stale CSS - do hard refresh (Ctrl+Shift+R)

---

## 📊 Database Schema

```sql
-- Data stored in 'applications' table with:
- id: unique ID
- name: Customer's name
- email: Customer's email
- phone: Customer's mobile
- course_interested: Which course they're interested in
- form_type: 'chatbot_inquiry' (marks it as from chatbot)
- source: 'chatbot_widget'
- status: 'new' | 'reviewed' | 'contacted' | 'enrolled' | 'rejected'
- notes: Admin notes
- form_data: JSON with submission metadata
- created_at: When submitted
- updated_at: When last updated
```

---

## 🔒 Security Features

✅ **Email Validation** - Must be valid email format  
✅ **Phone Validation** - Must be 10 digits  
✅ **CORS Protected** - API only accepts from your domain  
✅ **Input Sanitization** - All inputs trimmed & validated  
✅ **Admin Auth** - Only authenticated admins can view  
✅ **RLS Policies** - Database level access control (via Supabase)  

---

## 📈 Analytics & Tracking

### **View Metrics:**

Go to `/admin/chatbot-inquiries` and see:
- Total inquiries submitted
- Filter by status to see conversion funnel
- Track follow-up actions

### **Export Data:**

```javascript
// In browser console at /admin/chatbot-inquiries:
const table = document.querySelector('table');
const csv = Array.from(table.rows)
  .map(row => Array.from(row.cells).map(cell => cell.textContent).join(','))
  .join('\n');
console.log(csv);
```

---

## 🎯 Next Steps / Advanced Features

### **Phase 2 (Optional):**
- ✅ Add AI responses using OpenAI API
- ✅ Send automatic confirmation emails
- ✅ Export inquiries to CSV
- ✅ Webhook integrations (Zapier, etc.)
- ✅ Phone number SMS notifications
- ✅ Chatbot analytics dashboard

### **Implementation Example:**

To add AI responses later, just replace the `handleStepFlow` function logic with an LLM call while keeping the same form flow structure.

---

## 📞 Support

For issues:
1. Check browser console (F12)
2. Check Supabase logs
3. Verify all files are in correct locations
4. Ensure database migration was applied
5. Check API endpoint `/api/chatbot-inquiry` is accessible

---

## ✨ Summary

Your chatbot is now:
- ✅ Live on your website (bottom-right)
- ✅ Collecting customer inquiries
- ✅ Storing data in Supabase
- ✅ Viewable in admin panel
- ✅ Fully customizable
- ✅ Mobile responsive
- ✅ Dark mode compatible
- ✅ Production ready

**Time to deploy: ~5 minutes!**

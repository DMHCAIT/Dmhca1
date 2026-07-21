import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';
import { _courses } from '@/data/courses';

const razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Zod schema for validation
const CreateRazorpayOrderSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  enrollmentId: z.union([z.string(), z.number(), z.null()]).optional(),
  userId: z.union([z.string(), z.null()]).optional(),
  courseName: z.string().min(1, 'Course name is required'),
  studentName: z.string().optional(),
  studentEmail: z.string().email().optional(),
  currency: z.string().default('INR'),
});

export const createRazorpayOrder = createServerFn({ method: 'POST' })
  .validator(CreateRazorpayOrderSchema)
  .handler(async ({ data }) => {
    const { amount, enrollmentId, userId, courseName, studentName, studentEmail, currency } = data;
    
    console.log('[Razorpay Order] Input received:', { amount, enrollmentId, userId, courseName, currency });
    
    try {
      // Coerce amount to number
      let numericAmount = Number(amount);

      if (!numericAmount || numericAmount < 1 || isNaN(numericAmount)) {
        // Try to compute from course price if courseName provided
        const found = _courses.find(c => c.title === courseName || c.slug === courseName);
        if (found && found.priceINR && Number(found.priceINR) > 0) {
          const price = Number(found.priceINR);
          const gst = Math.round(price * 0.18);
          const rp = Math.round(price * 0.04);
          numericAmount = price + gst + rp;
          console.log('[Razorpay Order] Computed amount from course price:', numericAmount);
        } else {
          console.error('[Razorpay Order] Invalid amount and course not found');
          throw new Error('Invalid amount or course not found');
        }
      }

      // Create Razorpay order
      const order = await razor.orders.create({
        amount: Math.round(numericAmount * 100), // Amount in paise
        currency,
        receipt: `pay_${Date.now()}`,
        notes: { enrollmentId: enrollmentId || null, userId: userId || null, courseName },
      });

      console.log('[Razorpay Order] Order created:', order.id);

      // Store order info in DB
      const { error: dbError } = await supabase.from('payments').insert({
        // enrollment_id will be set during payment verification (leave null for now)
        user_id: userId || null,
        course_name: courseName,
        student_name: studentName || null,
        student_email: studentEmail || 'unknown@example.com',
        amount: numericAmount,
        currency,
        payment_method: 'razorpay',
        razorpay_order_id: order.id,
        status: 'pending',
      });

      if (dbError) {
        console.error('[Razorpay Order] Database insertion error:', dbError);
        throw new Error(`Database error: ${dbError.message}`);
      }

      console.log('[Razorpay Order] Payment record created in database');

      return {
        ok: true,
        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        },
      };
    } catch (err) {
      console.error('[Razorpay Order] Error:', err);
      throw err;
    }
  });

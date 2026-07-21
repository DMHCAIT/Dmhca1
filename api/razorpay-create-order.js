import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';

const razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function post(req) {
  try {
    const { amount, currency = 'INR', enrollmentId, userId } = await req.json();

    if (!amount || !enrollmentId || !userId) {
      return new Response(JSON.stringify({ error: 'amount, enrollmentId, userId required' }), { status: 400 });
    }

    // Create Razorpay order
    const order = await razor.orders.create({
      amount: Math.round(amount * 100), // Amount in paise
      currency,
      receipt: `enr_${enrollmentId}_${Date.now()}`,
      notes: { enrollmentId, userId },
    });

    // Store order info in DB
    const { error: dbError } = await supabase.from('payments').insert({
      enrollment_id: enrollmentId,
      user_id: userId,
      amount,
      currency,
      payment_method: 'razorpay',
      razorpay_order_id: order.id,
      status: 'pending',
    });

    if (dbError) throw new Error(`DB error: ${dbError.message}`);

    return new Response(
      JSON.stringify({
        ok: true,
        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error('razorpay create order:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

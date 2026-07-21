import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function post(req) {
  try {
    const { amount, courseId, enrollmentId, userId } = await req.json();

    if (!amount || !courseId || !enrollmentId || !userId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Create payment record for loan (marked as pending/loan)
    const { error: dbError } = await supabase.from('payments').insert({
      enrollment_id: enrollmentId,
      user_id: userId,
      amount,
      currency: 'INR',
      payment_method: 'education_loan',
      status: 'pending',
    });

    if (dbError) throw new Error(`DB error: ${dbError.message}`);

    // Construct redirect URL to partner loan application
    const loanUrl = new URL(process.env.LOAN_PARTNER_URL);
    loanUrl.searchParams.set('amount', amount);
    loanUrl.searchParams.set('course', courseId);
    loanUrl.searchParams.set('enrollment_id', enrollmentId);

    return new Response(
      JSON.stringify({ ok: true, url: loanUrl.toString(), enrollmentId }),
      { status: 200 }
    );
  } catch (err) {
    console.error('loan redirect:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

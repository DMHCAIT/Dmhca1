import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function post(req) {
  try {
    const { courseId, userId, paymentMethod } = await req.json();

    if (!courseId || !userId) {
      return new Response(JSON.stringify({ error: 'courseId and userId required' }), { status: 400 });
    }

    // Check if user already enrolled in this course
    const { data: existing } = await supabase
      .from('enrollments')
      .select('id')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Already enrolled in this course' }), { status: 400 });
    }

    // Create enrollment record
    const status = paymentMethod === 'razorpay' ? 'pending' : 'active';
    const { data: enrollment, error: enrollError } = await supabase
      .from('enrollments')
      .insert({
        user_id: userId,
        course_id: courseId,
        status,
      })
      .select()
      .single();

    if (enrollError) throw new Error(`Enroll error: ${enrollError.message}`);

    return new Response(
      JSON.stringify({ ok: true, enrollment: { id: enrollment.id, status: enrollment.status } }),
      { status: 200 }
    );
  } catch (err) {
    console.error('enroll error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

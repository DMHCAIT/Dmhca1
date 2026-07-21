import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export const createEnrollment = createServerFn()
  .handler(async (input: {
    courseId?: string;
    courseName: string;
    userId: string;
    paymentMethod: 'razorpay' | 'loan';
    studentName: string;
    studentEmail: string;
  }) => {
    console.log('[Enroll] request input', input);
    try {
      const { courseId, courseName, userId, paymentMethod, studentName, studentEmail } = input;

      console.log('[Enroll] Creating enrollment:', { courseId, courseName, userId, paymentMethod, studentName, studentEmail });

      if (!courseName || !studentName || !studentEmail) {
        throw new Error('Missing required fields: courseName, studentName, studentEmail');
      }

      // Create enrollment record
      const status = paymentMethod === 'razorpay' ? 'pending' : 'active';
      const { data: enrollment, error: enrollError } = await supabase
        .from('enrollments')
        .insert({
          user_id: userId || null,
          course_id: courseId || courseName,
          course_name: courseName,
          student_name: studentName,
          student_email: studentEmail,
          payment_method: paymentMethod,
          status,
        })
        .select()
        .single();

      if (enrollError) throw new Error(`Database error: ${enrollError.message}`);

      console.log('[Enroll] Enrollment created:', enrollment.id);

      return { 
        ok: true, 
        enrollment: { 
          id: enrollment.id, 
          status: enrollment.status 
        } 
      };
    } catch (err) {
      console.error('[Enroll] Error:', err);
      throw err;
    }
  });

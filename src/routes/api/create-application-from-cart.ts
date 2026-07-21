import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const CreateApplicationSchema = z.object({
  email: z.string().email('Invalid email'),
  fullName: z.string().min(1, 'Full name required'),
  phone: z.string().optional(),
  courseName: z.string().min(1, 'Course name required'),
  programName: z.string().optional(),
  userId: z.string().uuid().optional(),
});

export const createApplicationFromCart = createServerFn({ method: 'POST' })
  .validator(CreateApplicationSchema)
  .handler(async ({ data: { email, fullName, phone, courseName, programName, userId } }) => {
    try {
      console.log('[CreateApplication] Creating application from cart:', {
        email,
        fullName,
        phone,
        courseName,
        programName,
        userId,
      });

      const insertPayload: Record<string, any> = {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        course_name: courseName || null,
        program_name: programName || null,
        status: 'new',
      };

      // Only add user_id if provided
      if (userId) {
        insertPayload.user_id = userId;
      }

      const { data: insertedData, error: dbError } = await supabase
        .from('applications')
        .insert([insertPayload])
        .select();

      if (dbError) {
        console.error('[CreateApplication] Database error:', dbError);
        throw new Error(`Failed to create application: ${dbError.message}`);
      }

      const appId = insertedData?.[0]?.id;
      if (!appId) {
        throw new Error('Failed to create application - no ID returned');
      }

      console.log('[CreateApplication] Application created successfully:', appId);
      return {
        success: true,
        applicationId: appId,
        message: 'Application created successfully',
      };
    } catch (error) {
      console.error('[CreateApplication] Error:', error);
      throw error;
    }
  });

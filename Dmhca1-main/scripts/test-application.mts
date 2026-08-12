import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function submitTestApplication() {
  try {
    console.log('🚀 Submitting test application...');
    
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          full_name: 'Dr. Rajesh Kumar',
          email: 'rajesh.kumar@example.com',
          phone: '+91 9876543210',
          course_name: 'Interventional Cardiology',
          program_name: 'Fellowship',
          qualification: 'MD/MS',
          experience: '5 years',
          message: 'I am interested in advancing my skills in Interventional Cardiology.',
          status: 'new',
        },
      ])
      .select();

    if (error) {
      console.error('❌ Error submitting application:', error);
      throw error;
    }

    console.log('✅ Application submitted successfully!');
    console.log('📋 Submitted application:', data);

    // Verify it was saved
    const { count, error: countError } = await supabase
      .from('applications')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error counting applications:', countError);
    } else {
      console.log(`✅ Total applications in database: ${count}`);
    }

  } catch (error: any) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

submitTestApplication();

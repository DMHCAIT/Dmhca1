import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwpagbsineaqkblihger.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGFnYnNpbmVhcWtibGloZ2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNjU1MjQsImV4cCI6MjA5Nzk0MTUyNH0.yYP6vZveRMPEPVNnNTGOxQauLuf5G-G0pXb8hfAJRcc';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  try {
    console.log('Testing Supabase insert with anon key...');
    const { data, error } = await supabase
      .from('certificates')
      .insert([{
        certificate_id: 'DMHCA-PGC-9999999999',
        full_name: 'Test User Via Script',
        qualification: 'Test Certificate',
        mode: 'Online',
        month_year: 'July 2024',
        status: 'Active'
      }])
      .select();
    
    if (error) {
      console.error('Insert error:', error.message);
      console.error('Error code:', error.code);
      console.error('Full error:', JSON.stringify(error, null, 2));
    } else {
      console.log('Insert successful!');
      console.log('Data:', JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error('Exception:', err.message);
  }
}

testInsert();

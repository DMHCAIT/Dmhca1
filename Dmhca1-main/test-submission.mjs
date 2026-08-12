import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwpagbsineaqkblihger.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGFnYnNpbmVhcWtibGloZ2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNjU1MjQsImV4cCI6MjA5Nzk0MTUyNH0.yYP6vZveRMPEPVNnNTGOxQauLuf5G-G0pXb8hfAJRcc';

const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
  .from('applications')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(10);

if (error) {
  console.error('Error:', error);
} else {
  console.log('Recent applications:');
  console.log(JSON.stringify(data, null, 2));
}

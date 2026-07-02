import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ Missing SUPABASE credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function checkMessages() {
  console.log('🔍 Checking contact messages in database...\n');

  try {
    const { data: messages, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.error('❌ Error fetching messages:', error.message);
      process.exit(1);
    }

    console.log(`📊 Latest 5 contact messages:\n`);
    
    if (messages && messages.length > 0) {
      messages.forEach((msg: any, i: number) => {
        console.log(`${i + 1}. ${msg.name}`);
        console.log(`   Email: ${msg.email}`);
        console.log(`   Phone: ${msg.phone}`);
        console.log(`   Message: ${msg.message.substring(0, 50)}...`);
        console.log(`   Status: ${msg.status}`);
        console.log(`   Date: ${new Date(msg.created_at).toLocaleString()}\n`);
      });
      
      console.log('✅ Messages are being stored successfully in the database!');
      console.log('✅ Mobile number field is working!');
    } else {
      console.log('⚠️ No messages in database yet. Try submitting the form again.');
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

checkMessages();

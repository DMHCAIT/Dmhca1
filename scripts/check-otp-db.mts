import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

async function checkDatabase() {
  console.log('🔍 Checking OTP Tokens Table...\n');

  try {
    // Get the latest OTP token
    const { data, error } = await supabase
      .from('otp_tokens')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.error('❌ Error fetching OTP tokens:', error.message);
      process.exit(1);
    }

    console.log('📋 Latest OTP Records:\n');
    if (!data || data.length === 0) {
      console.log('   No OTP records found in database');
    } else {
      data.forEach((record: any, index: number) => {
        console.log(`${index + 1}. Email: ${record.email}`);
        console.log(`   ID: ${record.id}`);
        console.log(`   Created: ${record.created_at}`);
        console.log(`   Expires: ${record.expires_at}`);
        console.log(`   Verified: ${record.verified}`);
        console.log(`   OTP Hash Length: ${record.otp_hash?.length || 'N/A'}`);
        
        // Check if expired
        const expiresTime = new Date(record.expires_at).getTime();
        const nowTime = new Date().getTime();
        const timeRemaining = expiresTime - nowTime;
        console.log(`   Time Remaining: ${Math.floor(timeRemaining / 1000)} seconds`);
        console.log();
      });
    }

    // Check table structure
    console.log('\n📊 Table Info:\n');
    const { data: tableInfo, error: tableError } = await supabase.rpc('get_table_info', {
      table_name: 'otp_tokens',
      schema_name: 'public'
    }).catch(() => ({ data: null, error: true }));

    if (tableError || !tableInfo) {
      console.log('   (Could not fetch table structure via RPC)\n');
      
      // Try alternative: insert a test record
      console.log('🧪 Testing INSERT...\n');
      const testOtp = '123456';
      const testHash = require('crypto')
        .createHash('sha256')
        .update(testOtp)
        .digest('hex');
      
      const { data: insertData, error: insertError } = await supabase
        .from('otp_tokens')
        .insert({
          email: 'test@dmhca.in',
          otp_hash: testHash,
          expires_at: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
          verified: false,
        })
        .select();

      if (insertError) {
        console.error('❌ INSERT failed:', insertError.message);
        console.error('   Error code:', insertError.code);
      } else {
        console.log('✅ INSERT successful!');
        console.log('   Record:', insertData);
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

checkDatabase();

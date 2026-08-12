import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function post(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return new Response(JSON.stringify({ error: 'email and otp required' }), { status: 400 });
    }

    // Find valid OTP token
    const { data: tokens, error: fetchError } = await supabase
      .from('otp_tokens')
      .select('*')
      .eq('email', email)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !tokens) {
      return new Response(JSON.stringify({ error: 'OTP expired or not found' }), { status: 400 });
    }

    // Verify OTP hash
    const otpHash = crypto.createHash('sha256').update(String(otp)).digest('hex');
    if (tokens.otp_hash !== otpHash) {
      return new Response(JSON.stringify({ error: 'Invalid OTP' }), { status: 400 });
    }

    // Mark OTP as verified
    await supabase.from('otp_tokens').update({ verified: true }).eq('id', tokens.id);

    // Get or create user
    let { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (userError && userError.code === 'PGRST116') {
      // User doesn't exist, create one
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert({ email })
        .select()
        .single();

      if (insertError) throw new Error(`Failed to create user: ${insertError.message}`);
      user = newUser;
    } else if (userError) {
      throw new Error(`Database error: ${userError.message}`);
    }

    // Generate session token (simple JWT-like token for demo)
    const token = Buffer.from(
      JSON.stringify({ userId: user.id, email, iat: Date.now() })
    ).toString('base64');

    return new Response(JSON.stringify({ ok: true, token, userId: user.id, email }), { status: 200 });
  } catch (err) {
    console.error('verify-otp error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
  }
}

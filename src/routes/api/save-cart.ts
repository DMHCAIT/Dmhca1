import { createServerFn } from '@tanstack/react-start';
import { supabaseAdmin, supabaseClient } from '@/lib/supabase';

export const saveCart = createServerFn()
  .handler(async ({ userId, cartItems }:{ userId?: string, cartItems?: any[] }) => {
    console.log('[SaveCart] request input', { userId, cartLength: Array.isArray(cartItems) ? cartItems.length : 0 });
    try {
      if (!userId) {
        console.warn('[SaveCart] userId missing, skipping');
        return { success: false, message: 'userId required' };
      }
      const payload = Array.isArray(cartItems) ? cartItems : [];
      const sb = supabaseAdmin || supabaseClient;
      if (!sb) throw new Error('No database connection');
      const { data, error } = await sb
        .from('carts')
        .upsert({ user_id: userId, cart: payload, updated_at: new Date().toISOString() }, { onConflict: ['user_id'] })
        .select();
      if (error) {
        console.error('[SaveCart] supabase error', error);
        throw error;
      }
      console.log('[SaveCart] saved successfully');
      return { success: true, data };
    } catch (err) {
      console.error('[SaveCart] Error:', err instanceof Error ? err.message : err);
      throw err;
    }
  });

export default saveCart;

import { saveCart } from '@/routes/api/save-cart';
import { supabaseClient } from './supabase';

export async function syncLocalCartToServer(userId?: string) {
  if (!userId) return;
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    const cart = raw ? JSON.parse(raw) : [];
    await saveCart({ userId, cart });
    console.log('[CartSync] synced local cart to server for', userId);
  } catch (err) {
    console.error('[CartSync] failed to sync cart', err);
  }
}

export async function loadServerCartToLocal(userId?: string) {
  if (!userId) return;
  try {
    const { data, error } = await supabaseClient.from('carts').select('cart').eq('user_id', userId).single();
    if (error) {
      console.error('[CartSync] failed to load cart', error);
      return;
    }
    const serverCart = data?.cart || [];
    const raw = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    const localCart = raw ? JSON.parse(raw) : [];
    // simple merge: server items + local unique by slug
    const merged = [...serverCart];
    for (const item of localCart) {
      if (!merged.find((m:any) => m.slug === item.slug)) merged.push(item);
    }
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(merged));
    console.log('[CartSync] loaded server cart to local for', userId);
  } catch (err) {
    console.error('[CartSync] error loading cart', err);
  }
}

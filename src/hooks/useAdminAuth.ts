import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabaseClient } from '@/lib/supabase';

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        // Check if user is admin (you can add role checking later)
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
        navigate({ to: '/admin-login' });
      }
      setIsLoading(false);
    });

    return () => data.subscription.unsubscribe();
  }, [navigate]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setIsAuthed(!!session?.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthed(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { isAuthed, isLoading };
}

export async function logout() {
  await supabaseClient.auth.signOut();
}

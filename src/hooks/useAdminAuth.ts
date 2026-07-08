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
        // In development mode, allow access without Supabase session
        const isDev = import.meta.env.DEV;
        if (isDev) {
          setIsAuthed(true);
        } else {
          setIsAuthed(false);
          navigate({ to: '/admin-login' });
        }
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
      // In development, allow access even if Supabase fails
      const isDev = import.meta.env.DEV;
      setIsAuthed(isDev);
    } finally {
      setIsLoading(false);
    }
  };

  return { isAuthed, isLoading };
}

export async function logout() {
  await supabaseClient.auth.signOut();
}

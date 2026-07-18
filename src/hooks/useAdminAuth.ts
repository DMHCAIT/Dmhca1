import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabaseClient } from '@/lib/supabase';

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isDev = import.meta.env.DEV;
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsAuthed(true);
      } else if (isDev) {
        // In development mode, allow access without Supabase session
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
      setIsLoading(false);
    });

    return () => data.subscription.unsubscribe();
  }, [navigate, isDev]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session?.user) {
        setIsAuthed(true);
      } else if (isDev) {
        // In development, allow access even if Supabase fails
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // In development, allow access even if Supabase fails
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

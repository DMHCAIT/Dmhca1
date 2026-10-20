import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let authEventReceived = false;
    const { data } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      authEventReceived = true;
      setIsAuthed(Boolean(session?.user && session.access_token));
      setIsLoading(false);
    });

    const checkAuth = async () => {
      try {
        const { data: sessionData, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        if (active && !authEventReceived) {
          setIsAuthed(Boolean(sessionData.session?.user && sessionData.session.access_token));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        if (active && !authEventReceived) {
          setIsAuthed(false);
          setIsLoading(false);
        }
      }
    };
    void checkAuth();

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return { isAuthed, isLoading };
}

export async function logout() {
  await supabaseClient.auth.signOut();
}

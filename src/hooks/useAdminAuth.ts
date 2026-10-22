import { useEffect, useState } from "react";
import { isAuthApiError, isAuthSessionMissingError } from "@supabase/supabase-js";
import { supabaseClient } from "@/lib/supabase";

// getSession() only reads the browser's cached token, so ask Supabase whether the
// session is still valid. Revoked sessions (e.g. after a password change) are
// signed out locally; network errors leave the session alone.
async function verifySessionWithServer() {
  const { data: sessionData } = await supabaseClient.auth.getSession();
  if (!sessionData.session) return false;

  const { error } = await supabaseClient.auth.getUser();
  if (!error) return true;
  if (isAuthSessionMissingError(error) || (isAuthApiError(error) && error.status < 500)) {
    await supabaseClient.auth.signOut({ scope: "local" });
    return false;
  }
  return true;
}

export function useAdminAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const { data } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      if (!session?.user || !session.access_token) {
        setIsAuthed(false);
        setIsLoading(false);
      }
    });

    const checkAuth = async () => {
      try {
        const valid = await verifySessionWithServer();
        if (active) setIsAuthed(valid);
      } catch (error) {
        console.error("Auth check failed:", error);
        if (active) setIsAuthed(false);
      } finally {
        if (active) setIsLoading(false);
      }
    };
    void checkAuth();

    const recheckWhenVisible = () => {
      if (document.visibilityState === "visible") void checkAuth();
    };
    document.addEventListener("visibilitychange", recheckWhenVisible);
    window.addEventListener("focus", recheckWhenVisible);

    return () => {
      active = false;
      data.subscription.unsubscribe();
      document.removeEventListener("visibilitychange", recheckWhenVisible);
      window.removeEventListener("focus", recheckWhenVisible);
    };
  }, []);

  return { isAuthed, isLoading };
}

export async function logout() {
  await supabaseClient.auth.signOut();
}

"use client";

import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";

// shared
import { createBrowserSupabaseClient } from "@/shared/lib/supabase";

export const useCheckSupabaseConnected = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    // INITIAL_SESSION 이벤트로 초기 세션을 수신하여 getSession과의 경쟁 조건 방지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        setUser(session?.user ?? null);
        setIsLoading(false);
      } else {
        setUser(session?.user ?? null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user && !isLoading,
  };
};

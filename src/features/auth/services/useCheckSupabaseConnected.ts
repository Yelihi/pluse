"use client";

import { useState, useEffect } from "react";
import { User, Session, AuthChangeEvent } from "@supabase/supabase-js";

// shared
import { createBrowserSupabaseClient } from "@/shared/lib/supabase";

export const useCheckSupabaseConnected = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    const sessionPromise = supabase.auth.getSession();

    sessionPromise.then(({ data: { session } }: { data: { session: Session | null } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // 실시간으로 인증 상태 변경 감지
    // 즉, 로그아웃인지 로그인 상태인지 체크
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user ?? null);
    });

    // 컴포넌트 언마운트 시 구독 해제
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

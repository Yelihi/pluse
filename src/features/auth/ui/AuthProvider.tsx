"use client";

import { AuthContext } from "@/features/auth/models/contexts/auth";
import { useCheckSupabaseConnected } from "@/features/auth/services/useCheckSupabaseConnected";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isAuthenticated } = useCheckSupabaseConnected();

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

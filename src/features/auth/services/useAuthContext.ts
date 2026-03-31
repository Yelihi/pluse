"use client";

import { useContext } from "react";

import { AuthContext } from "@/features/auth/models/contexts/auth";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return context;
};

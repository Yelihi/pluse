"use client";

import { createContext } from "react";

import type { AuthContextValue } from "./interface";

export const AuthContext = createContext<AuthContextValue | null>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

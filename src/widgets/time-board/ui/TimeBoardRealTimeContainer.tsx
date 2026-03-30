"use client";

import { createContext, useContext } from "react";
import { useNow } from "@/shared/hooks/useNow";

const NowContext = createContext<Date | null>(null);

export function useNowContext() {
  const now = useContext(NowContext);
  if (!now) throw new Error("useNowContext must be used within TimeBoardRealTimeContainer");
  return now;
}

function TimeBoardRealTimeContainer({ children }: { children: React.ReactNode }) {
  const now = useNow();

  return <NowContext.Provider value={now}>{children}</NowContext.Provider>;
}

export default TimeBoardRealTimeContainer;

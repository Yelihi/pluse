"use client";

import { useState, useEffect } from "react";

export function useNow(stepMs: number = 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, stepMs);

    return () => clearInterval(intervalId);
  }, [stepMs]);

  return now;
}

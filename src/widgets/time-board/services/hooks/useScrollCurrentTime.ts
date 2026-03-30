"use client";

import { useEffect, useRef } from "react";

import { getCurrentTimePerMinutes } from "@/shared/utils";

export function useScrollCurrentTime(now: Date) {
  const lineRef = useRef<HTMLDivElement>(null);

  const currentTimePerMinutes = getCurrentTimePerMinutes(now);

  useEffect(() => {
    requestAnimationFrame(() => {
      lineRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  return {
    lineRef,
    currentTimePerMinutes,
  };
}

// export function useScrollCurrentTime(now: Date) {
//     const lineRef = useRef<HTMLDivElement>(null);
//     const [currentTimePerMinutes, setCurrentTimePerMinutes] = useState(0);

//     useEffect(() => {
//         flushSync(() => {
//             const currentTimePerMinutes = getCurrentTimePerMinutes();
//             setCurrentTimePerMinutes(currentTimePerMinutes);
//         })

//         requestAnimationFrame(() => {
//             lineRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
//         })

//         const intervalId = setInterval(() => {
//             const currentTimePerMinutes = getCurrentTimePerMinutes();
//             setCurrentTimePerMinutes(currentTimePerMinutes);
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, [])

//     return {
//         lineRef,
//         currentTimePerMinutes
//     }

// }

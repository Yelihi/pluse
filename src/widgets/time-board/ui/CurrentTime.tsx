"use client";

import { PX_PER_MINUTE } from "@/widgets/time-board/models/const";
import { useScrollCurrentTime } from "@/widgets/time-board/services";
import { useNowContext } from "@/widgets/time-board/ui/TimeBoardRealTimeContainer";

function CurrentTime() {
  const now = useNowContext();
  const { lineRef, currentTimePerMinutes } = useScrollCurrentTime(now);

  return (
    <div
      ref={lineRef}
      className="absolute left-0 w-full h-px border-none bg-red-500 z-10"
      style={{ top: currentTimePerMinutes * PX_PER_MINUTE }}
    ></div>
  );
}

export default CurrentTime;

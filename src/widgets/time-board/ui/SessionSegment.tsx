"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";
import { useMemo } from "react";

import type { SessionSegmentProps } from "@/widgets/time-board/models/interface";
import { PX_PER_SECOND } from "@/widgets/time-board/models/const";

const sessionSegmentVariants = cva("w-full flex justify-center items-center ", {
  variants: {
    type: {
      focus: "bg-green-200 border-[0.1px] border-green-400",
      distracted: "bg-yellow-200 border-[0.1px] border-yellow-400",
      absent: "bg-red-200 border-[0.1px] border-red-400",
      break: "bg-blue-200 border-[0.1px] border-blue-400",
    },
  },
  defaultVariants: {
    type: "focus",
  },
});

function SessionSegment({
  type,
  duration,
  className,
  ...props
}: SessionSegmentProps &
  VariantProps<typeof sessionSegmentVariants> &
  React.ComponentProps<"div">) {
  const realTimeSegmentStyle = useMemo(
    () => ({
      height: duration * PX_PER_SECOND,
    }),
    [duration],
  );

  return (
    <div
      style={realTimeSegmentStyle}
      className={cn(sessionSegmentVariants({ type }), className)}
      {...props}
    ></div>
  );
}

export default SessionSegment;

"use client";

import { useMemo } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";
import { getCurrentTimePerMinutes } from "@/shared/utils";

import SessionSegment from "@/widgets/time-board/ui/SessionSegment";
import { PX_PER_MINUTE } from "@/widgets/time-board/models/const";
import type { Session } from "@/widgets/time-board/models/interface";

const sessionBoundaryVariants = cva(
  "absolute left-0 w-full h-fit flex flex-col justify-start items-start hover:opacity-80 transition-all duration-200 cursor-pointer",
  {
    variants: {
      progress: {
        completed: "hover:border-green-600",
        inProgress: "hover:border-blue-600",
      },
    },
  },
);

function SessionBoundary({
  id,
  startTime,
  segments,
  progress,
  className,
  ...props
}: Session & VariantProps<typeof sessionBoundaryVariants> & React.ComponentProps<"div">) {
  const sessionBoundaryTop = useMemo(
    () => ({
      top: getCurrentTimePerMinutes(startTime) * PX_PER_MINUTE,
    }),
    [startTime],
  );

  return (
    <div
      id={id}
      style={sessionBoundaryTop}
      className={cn(sessionBoundaryVariants({ progress }), className)}
      {...props}
    >
      {segments.map((segment) => (
        <SessionSegment key={segment.id} {...segment} />
      ))}
    </div>
  );
}

export default SessionBoundary;

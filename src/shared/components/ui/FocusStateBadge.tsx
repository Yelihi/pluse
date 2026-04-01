"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const mappingStateToText = {
  focus: "집중중",
  distracted: "집중 필요",
  absent: "자리 비움",
  break: "휴식 중",
};

const focustStateVariants = cva("size-[8px] rounded-full animate-pulse", {
  variants: {
    state: {
      focus: "bg-green-500",
      distracted: "bg-orange-500",
      absent: "bg-red-500",
      break: "bg-blue-500",
    },
  },
});

function FocusStateBadge({
  className,
  state,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof focustStateVariants> & {
    state: "focus" | "distracted" | "absent" | "break";
  }) {
  return (
    <div
      className={cn(
        "flex w-fit justify-start items-center px-[17px] py-[9px] gap-[8px] rounded-[4px] bg-transparent border-gray-200 animate-pulse",
        className,
      )}
      {...props}
    >
      <div className={cn(focustStateVariants({ state }))}></div>
      <p className="text-[12px] font-normal text-white">{mappingStateToText[state]}</p>
    </div>
  );
}

export default FocusStateBadge;

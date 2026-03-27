"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const iconContainerVariants = cva("flex justify-center items-center rounded-xs bg-gray-100", {
  variants: {
    size: {
      sm: "p-[6px] size-[28px]",
      md: "p-[8px] size-[32px]",
      lg: "p-[10px] size-[40px]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

function IconContainer({
  children,
  size,
  className,
}: React.ComponentProps<"div"> & VariantProps<typeof iconContainerVariants>) {
  return <div className={cn(iconContainerVariants({ size, className }))}>{children}</div>;
}

export { IconContainer, iconContainerVariants };

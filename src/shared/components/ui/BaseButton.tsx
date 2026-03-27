"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/index";

import { Spinner } from "@/shared/components/svg";

const baseButtonVariants = cva(
  "flex justify-center items-center gap-[7px] rounded-xs text-[14px] font-normal hover:opacity-80 active:scale-98 transition-all duration-100",
  {
    variants: {
      selected: {
        true: "cursor-none active:scale-100",
        false: "cursor-pointer",
      },
      theme: {
        black: "bg-black text-white",
        white: "bg-white text-black border-gray-300 border",
      },
      size: {
        sm: "px-[11px] py-[7px]",
        md: "px-[16px] py-[8px]",
      },
    },
    defaultVariants: {
      selected: false,
      theme: "white",
      size: "md",
    },
  },
);

function BaseButton({
  className,
  selected,
  theme,
  value,
  pending,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof baseButtonVariants> & { pending?: boolean }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(baseButtonVariants({ selected, theme, className }))}
      {...props}
    >
      {pending ? <Spinner /> : props.children}
      {pending ? "" : value}
    </ButtonPrimitive>
  );
}

export { BaseButton, baseButtonVariants };

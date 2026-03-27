"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "@/shared/utils/index";

import { cva, type VariantProps } from "class-variance-authority";

const nativeButtonVariants = cva(
  "w-full py-[13px] flex justify-center items-start self-stretch cursor-pointer hover:opacity-80 active:scale-98 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-1 border-gray-200 bg-white",
        fill: "",
      },
      oauth: {
        kakao: "bg-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function NativeButton({
  className,
  variant = "default",
  oauth,
  value,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof nativeButtonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(nativeButtonVariants({ variant, oauth, className }))}
      {...props}
    >
      <div className="flex justify-center items-center gap-[10px]">
        <div className="flex justify-center items-center size-[16px]">{props.children}</div>
        <p className="text-[14px] font-normal text-black">{value}</p>
      </div>
    </ButtonPrimitive>
  );
}

export { NativeButton, nativeButtonVariants };

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const borderBoxVariants = cva("w-full flex justify-center items-center p-[16px] ", {
  variants: {
    borderTop: {
      true: "border-t border-gray-200",
      false: "",
    },
    borderBottom: {
      true: "border-b border-gray-200",
      false: "",
    },
    borderLeft: {
      true: "border-l border-gray-200",
      false: "",
    },
    borderRight: {
      true: "border-r border-gray-200",
      false: "",
    },
  },
  defaultVariants: {
    borderTop: false,
    borderBottom: false,
    borderLeft: false,
    borderRight: false,
  },
});

function BorderBox({
  className,
  children,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof borderBoxVariants>) {
  return (
    <div
      className={cn(
        borderBoxVariants({ borderTop, borderBottom, borderLeft, borderRight }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { BorderBox };

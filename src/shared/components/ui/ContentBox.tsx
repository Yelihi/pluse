import { cva, type VariantProps } from "class-variance-authority";

const contentBoxVariants = cva("p-[14px] flex justify-center items-center rounded-[4px]", {
  variants: {
    theme: {
      light: "bg-warm",
      dark: "bg-black",
    },
    border: {
      true: "border border-gray-200",
      false: "",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

function ContentBox({
  children,
  className,
  theme,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof contentBoxVariants>) {
  return (
    <div className={contentBoxVariants({ theme, className })} {...props}>
      {children}
    </div>
  );
}

export { ContentBox };

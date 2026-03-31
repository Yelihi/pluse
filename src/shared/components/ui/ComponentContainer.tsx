import { cn } from "@/shared/utils/index";

import { IconContainer } from "@/shared/components/ui/IconContainer";

function ComponentContainerIconTitle({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <header
      className={cn("w-full flex justify-start items-center gap-[12px]", className)}
      {...props}
    >
      <IconContainer size="md">{children}</IconContainer>
      <h1 className="text-[14px] font-medium text-black leading-[140%]">{title}</h1>
    </header>
  );
}

function ComponentContainerHeader({
  className,
  children,
  title,
  ...props
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <header className={cn("w-full flex flex-col items-start gap-[12px]", className)} {...props}>
      {title && <h1 className="text-[14px] font-medium text-black leading-[140%]">{title}</h1>}
      {children}
    </header>
  );
}

function ComponentContainer({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-start gap-[24px] rounded-[6px] border border-gray-200 bg-white p-[25px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { ComponentContainer, ComponentContainerHeader, ComponentContainerIconTitle };

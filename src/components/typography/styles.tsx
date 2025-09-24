import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function TypographyBold({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <strong className={cn("font-semibold", className)} {...props}>
      {children}
    </strong>
  );
}

function TypographyItalic({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <em className={cn("italic", className)} {...props}>
      {children}
    </em>
  );
}

export { TypographyBold, TypographyItalic };

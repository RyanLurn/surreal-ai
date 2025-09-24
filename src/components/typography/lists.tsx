import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function TypographyOrderedList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "my-2 ml-2 list-inside list-decimal [&>li]:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
}

function TypographyUnorderedList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-2 ml-2 list-inside list-disc [&>li]:mt-2", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

export { TypographyOrderedList, TypographyUnorderedList };

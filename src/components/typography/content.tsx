import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function TypographyParagraph({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function TypographyBlockquote({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

function TypographyLink({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn("font-medium text-primary underline", className)}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

function TypographyInlineCode({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export {
  TypographyParagraph,
  TypographyBlockquote,
  TypographyLink,
  TypographyInlineCode,
};

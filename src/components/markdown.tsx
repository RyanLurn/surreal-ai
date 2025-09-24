import type { Options } from "react-markdown";
import {
  TypographyBlockquote,
  TypographyLink,
  TypographyParagraph,
} from "@/components/typography/content";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/typography/headings";
import {
  TypographyOrderedList,
  TypographyUnorderedList,
} from "@/components/typography/lists";
import {
  TypographyBold,
  TypographyItalic,
} from "@/components/typography/styles";

const markdownComponents: Options["components"] = {
  a: ({ node, children, className, ...props }) => (
    <TypographyLink className={className} {...props}>
      {children}
    </TypographyLink>
  ),
  blockquote: ({ node, children, className, ...props }) => (
    <TypographyBlockquote className={className} {...props}>
      {children}
    </TypographyBlockquote>
  ),
  em: ({ node, children, className, ...props }) => (
    <TypographyItalic className={className} {...props}>
      {children}
    </TypographyItalic>
  ),
  h1: ({ node, children, className, ...props }) => (
    <TypographyH1 className={className} {...props}>
      {children}
    </TypographyH1>
  ),
  h2: ({ node, children, className, ...props }) => (
    <TypographyH2 className={className} {...props}>
      {children}
    </TypographyH2>
  ),
  h3: ({ node, children, className, ...props }) => (
    <TypographyH3 className={className} {...props}>
      {children}
    </TypographyH3>
  ),
  h4: ({ node, children, className, ...props }) => (
    <TypographyH4 className={className} {...props}>
      {children}
    </TypographyH4>
  ),
  ol: ({ node, children, className, ...props }) => (
    <TypographyOrderedList className={className} {...props}>
      {children}
    </TypographyOrderedList>
  ),
  p: ({ node, children, className, ...props }) => (
    <TypographyParagraph className={className} {...props}>
      {children}
    </TypographyParagraph>
  ),
  strong: ({ node, children, className, ...props }) => (
    <TypographyBold className={className} {...props}>
      {children}
    </TypographyBold>
  ),
  ul: ({ node, children, className, ...props }) => (
    <TypographyUnorderedList className={className} {...props}>
      {children}
    </TypographyUnorderedList>
  ),
};

export { markdownComponents };

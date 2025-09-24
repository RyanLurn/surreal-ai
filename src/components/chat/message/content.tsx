import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/markdown";

function MessageContent({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-3 py-2 text-foreground group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
      <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </div>
  );
}

export { MessageContent };

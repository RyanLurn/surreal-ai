import { MessageAvatar } from "@/components/chat/message/avatar";
import { MessageContent } from "@/components/chat/message/content";
import { cn } from "@/lib/utils";

function MessageBubble({
  className,
  role,
  content,
}: {
  className?: string;
  role: "user" | "assistant";
  content: string;
}) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4",
        role === "user" ? "is-user" : "is-assistant flex-row-reverse",
        "[&>div]:max-w-[80%]",
        className
      )}
    >
      <MessageContent content={content} />
      <MessageAvatar role={role} />
    </div>
  );
}

export { MessageBubble };

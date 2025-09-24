import { StickToBottom } from "use-stick-to-bottom";
import { MessageBubble } from "@/components/chat/message/bubble";
import { LoadingSpinner } from "@/components/utils/loading-spinner";
import { useMessages } from "@/hooks/use-messages";
import { CHAT_CONTAINER_WIDTH } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Conversation({ className }: { className?: string }) {
  const { data: messages, isPending, isError } = useMessages();

  if (isPending) {
    return (
      <LoadingSpinner isFullScreen={false} message="Loading chat messages..." />
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Error loading chat messages</p>
      </div>
    );
  }

  return (
    <StickToBottom
      className={cn(
        "relative flex w-full flex-col gap-y-3 overflow-y-auto",
        className
      )}
      initial="smooth"
      resize="smooth"
      role="log"
    >
      <StickToBottom.Content
        className={cn("flex flex-col gap-4 pt-4", CHAT_CONTAINER_WIDTH)}
      >
        {messages.map((message) => (
          <MessageBubble
            content={message.content}
            key={message.id}
            role={message.role}
          />
        ))}
      </StickToBottom.Content>
    </StickToBottom>
  );
}

export { Conversation };

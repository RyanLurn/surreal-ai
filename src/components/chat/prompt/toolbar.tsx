import { SendButton } from "@/components/chat/prompt/send-button";
import { PromptTools } from "@/components/chat/prompt/tools";

function PromptToolbar({ isDisabled }: { isDisabled: boolean }) {
  return (
    <div className={"flex items-center justify-between p-1.5"}>
      <PromptTools isDisabled={isDisabled} />
      <SendButton isDisabled={isDisabled} />
    </div>
  );
}

export { PromptToolbar };

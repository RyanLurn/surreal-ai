import type { FormEvent } from "react";
import { PromptEditor } from "@/components/chat/prompt/editor";
import { PromptToolbar } from "@/components/chat/prompt/toolbar";
import { CHAT_CONTAINER_WIDTH } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Prompt({
  className,
  submitPrompt,
  prompt,
  changePrompt,
  isDisabled,
}: {
  className?: string;
  submitPrompt: (e: FormEvent<HTMLFormElement>) => void;
  prompt: string;
  changePrompt: (prompt: string) => void;
  isDisabled: boolean;
}) {
  return (
    <form
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-input bg-background shadow-sm dark:bg-input/30",
        CHAT_CONTAINER_WIDTH,
        className
      )}
      onSubmit={submitPrompt}
    >
      <PromptEditor
        changePrompt={changePrompt}
        isDisabled={isDisabled}
        name="prompt"
        prompt={prompt}
      />
      <PromptToolbar isDisabled={isDisabled} />
    </form>
  );
}

export { Prompt };

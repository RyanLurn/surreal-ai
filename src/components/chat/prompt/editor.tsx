import type { KeyboardEvent } from "react";
import { Textarea } from "@/components/ui/textarea";

function PromptEditor({
  name,
  prompt,
  changePrompt,
  isDisabled,
}: {
  name: string;
  prompt: string;
  changePrompt: (prompt: string) => void;
  isDisabled: boolean;
}) {
  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        return;
      }

      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  }

  return (
    <Textarea
      className="max-h-48 min-h-20 w-full resize-none rounded-none border-none bg-transparent p-3 shadow-none ring-0 outline-none focus-visible:ring-0 md:text-base dark:bg-transparent"
      disabled={isDisabled}
      name={name}
      onChange={(e) => changePrompt(e.target.value)}
      onKeyDown={handleKeyDown}
      value={prompt}
    />
  );
}

export { PromptEditor };

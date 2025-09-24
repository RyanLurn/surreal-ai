import { File } from "lucide-react";
import { Button } from "@/components/ui/button";

function PromptTools({ isDisabled }: { isDisabled: boolean }) {
  return (
    <div className="flex items-center gap-1 [&_button:first-child]:rounded-bl-xl">
      <Button disabled={isDisabled} size="icon" variant="outline">
        <File />
      </Button>
    </div>
  );
}

export { PromptTools };

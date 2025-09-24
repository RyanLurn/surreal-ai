import { Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function SendButton({ isDisabled }: { isDisabled: boolean }) {
  return (
    <Button
      className="rounded-lg"
      disabled={isDisabled}
      size="icon"
      type="submit"
    >
      {isDisabled ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <SendIcon className="size-4" />
      )}
    </Button>
  );
}

export { SendButton };

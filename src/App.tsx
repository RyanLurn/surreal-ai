import { useEffect } from "react";
import { Conversation } from "@/components/chat/conversation";
import { Prompt } from "@/components/chat/prompt";
import { useSubmitPrompt } from "@/hooks/use-submit-prompt";
import { connectDB, db } from "@/lib/db";

function App() {
  const { prompt, changePrompt, stream, submitPrompt, isDisabled } =
    useSubmitPrompt();

  useEffect(() => {
    connectDB();
    return () => {
      db.close();
    };
  }, []);

  return (
    <div className="flex size-full flex-1 flex-col gap-y-3">
      <Conversation className="flex-1" stream={stream} />
      <Prompt
        changePrompt={changePrompt}
        className="mb-4"
        isDisabled={isDisabled}
        prompt={prompt}
        submitPrompt={submitPrompt}
      />
    </div>
  );
}

export default App;

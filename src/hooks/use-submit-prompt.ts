import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type FormEvent, useCallback, useState } from "react";
import { toast } from "sonner";
import { createMessage } from "@/functions/create-message";
import { streamResponse } from "@/functions/stream-response";

function useSubmitPrompt() {
  const queryClient = useQueryClient();
  const [prompt, setPrompt] = useState("");
  const [stream, setStream] = useState("");

  const { mutate: sendPrompt, isPending: isSendingPrompt } = useMutation({
    mutationFn: createMessage,
    onError: (err) => {
      console.error(err);
      toast.error("Failed to send prompt");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });

  const { mutate: createResponse, isPending: isCreatingResponse } = useMutation(
    {
      mutationFn: streamResponse,
      onError: (err) => {
        console.error(err);
        toast.error("Failed to generate AI response");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["messages"],
        });
      },
    }
  );

  const updateStream = useCallback((newTextPart: string) => {
    setStream((prev) => prev + newTextPart);
  }, []);

  const clearStream = useCallback(() => {
    setStream("");
  }, []);

  const submitPrompt = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const promptText = prompt.trim();
      if (promptText === "") {
        return;
      }
      setPrompt("");
      sendPrompt({
        content: promptText,
        role: "user",
      });
      createResponse({ clearStream, updateStream });
    },
    [prompt, sendPrompt, createResponse, clearStream, updateStream]
  );

  return {
    isDisabled: isSendingPrompt || isCreatingResponse,
    stream,
    submitPrompt,
  };
}

export { useSubmitPrompt };

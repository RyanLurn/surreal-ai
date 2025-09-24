import { streamText } from "ai";
import { createMessage } from "@/functions/create-message";
import { listMessages } from "@/functions/list-messages";
import { groqProvider } from "@/lib/ai-providers";

async function streamResponse({
  updateStream,
  clearStream,
}: {
  updateStream: (textPart: string) => void;
  clearStream: () => void;
}) {
  const messages = await listMessages();

  const { textStream, text } = streamText({
    messages,
    model: groqProvider("llama-3.1-8b-instant"),
  });

  for await (const textPart of textStream) {
    updateStream(textPart);
  }

  await createMessage({
    content: await text,
    role: "assistant",
  });

  clearStream();
}

export { streamResponse };

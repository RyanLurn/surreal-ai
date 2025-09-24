import { useQuery } from "@tanstack/react-query";
import { listMessages } from "@/functions/list-messages";

function useMessages() {
  const messagesQuery = useQuery({
    queryFn: listMessages,
    queryKey: ["messages"],
  });
  return messagesQuery;
}

export { useMessages };

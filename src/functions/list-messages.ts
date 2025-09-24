import { db } from "@/lib/db";
import type { Message } from "@/lib/types";

async function listMessages() {
  await db.ready;
  const messages = await db.select<Message>("messages");
  return messages;
}

export { listMessages };

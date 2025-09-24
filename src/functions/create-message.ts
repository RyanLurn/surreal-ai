import { RecordId, Uuid } from "surrealdb";
import { db } from "@/lib/db";
import type { Message } from "@/lib/types";

async function createMessage({ role, content }: Omit<Message, "id">) {
  await db.ready;
  const newMessage = await db.create<Message, Omit<Message, "id">>(
    new RecordId("messages", Uuid.v7()),
    {
      content,
      role,
    }
  );

  return newMessage;
}

export { createMessage };

import { surrealdbWasmEngines } from "@surrealdb/wasm";
import { Surreal } from "surrealdb";
import { env } from "@/lib/env";

const db = new Surreal({
  engines: surrealdbWasmEngines(),
});

async function connectDB() {
  await db.connect(env.VITE_SURREALDB_CONNECTION_STRING, {
    database: env.VITE_SURREALDB_DATABASE,
    namespace: env.VITE_SURREALDB_NAMESPACE,
  });
}

export { db, connectDB };

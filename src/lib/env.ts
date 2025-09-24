import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  client: {
    VITE_SURREALDB_CONNECTION_STRING: z.string().min(1),
    VITE_SURREALDB_DATABASE: z.string().min(1),
    VITE_SURREALDB_NAMESPACE: z.string().min(1),
  },
  clientPrefix: "VITE_",
  runtimeEnv: import.meta.env,
});

export { env };

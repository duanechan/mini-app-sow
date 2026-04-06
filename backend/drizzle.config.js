import "dotenv/config";

import { defineConfig } from "drizzle-kit";
import { getOrThrow } from "./src/lib/config.js";

const DB_URL = getOrThrow("DB_URL");

export default defineConfig({
  schema: "src/db/schema.js",
  dialect: "postgresql",
  out: "drizzle",
  dbCredentials: {
    url: DB_URL,
  },
});

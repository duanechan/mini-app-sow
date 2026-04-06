import "dotenv/config";

import { defineConfig } from "drizzle-kit";
import { config } from "./src/lib/config.js";

export default defineConfig({
  schema: "src/db/schema.js",
  dialect: "postgresql",
  out: "drizzle",
  dbCredentials: {
    url: config.dbUrl,
  },
});

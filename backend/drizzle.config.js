import { defineConfig } from "drizzle-kit";
import { dbUrl } from "./src/lib/config.js";

export default defineConfig({
  schema: "src/db/schema.js",
  dialect: "postgresql",
  dbCredentials: { url: dbUrl },
});

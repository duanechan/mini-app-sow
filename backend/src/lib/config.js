const port = process.env.PORT;
if (!port) {
  throw new Error("Port environment variable not set");
}

const logLevel = process.env.LOG_LEVEL;
if (!logLevel) {
  throw new Error("Log level environment variable not set");
}

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  throw new Error("DB URL environment variable not set");
}

export { dbUrl, logLevel, port };

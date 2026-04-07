import "dotenv/config";

function getOrThrow(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} environment variable not set`);
  }
  return value;
}

export const config = {
  port: getOrThrow("PORT"),
  platform: getOrThrow("PLATFORM"),
  jwtSecret: getOrThrow("JWT_SECRET"),
  jwtExpiry: parseInt(getOrThrow("JWT_EXPIRY")),
  dbUrl: getOrThrow("DB_URL"),
  logLevel: getOrThrow("LOG_LEVEL"),
};

import "dotenv/config";

export function getOrThrow(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} environment variable not set`);
  }
  return value;
}

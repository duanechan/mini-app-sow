import { logger } from "../lib/log.js";

export function logMiddleware(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now() - start;
    logger.info(
      `${req.method} ${req.url} - ${res.statusCode} ${res.statusMessage} (${end}ms)`,
    );
  });
  next();
}

import { config } from "./config.js";

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };

export class Logger {
  constructor(level = "info") {
    this.info(`Logger (Level ${level}) initialized`);
    this.level = LEVELS[level];
  }

  info(message) {
    if (LEVELS.info >= this.level)
      console.log(`[INFO] [${new Date().toISOString()}] ${message}`);
  }

  warn(message) {
    if (LEVELS.warn >= this.level)
      console.warn(`[WARN] [${new Date().toISOString()}] ${message}`);
  }

  debug(message) {
    if (LEVELS.debug >= this.level)
      console.debug(`[DEBUG] [${new Date().toISOString()}] ${message}`);
  }

  error(message) {
    if (LEVELS.error >= this.level)
      console.error(`[ERROR] [${new Date().toISOString()}] ${message}`);
  }
}

export const logger = new Logger(config.logLevel);

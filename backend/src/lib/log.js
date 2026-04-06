export class Logger {
  info(message) {
    console.log(`[INFO] [${new Date()}] ${message}`);
  }

  warn(message) {
    console.warn(`[WARN] [${new Date()}] ${message}`);
  }

  debug(message) {
    console.debug(`[DEBUG] [${new Date()}] ${message}`);
  }

  error(message) {
    console.error(`[ERROR] [${new Date()}] ${message}`);
  }
}

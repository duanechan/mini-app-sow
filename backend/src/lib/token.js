import jwt from "jsonwebtoken";
import { config } from "./config.js";
import { logger } from "./log.js";

export function createJWT(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
    },
    config.jwtSecret,
    {
      algorithm: "HS256",
      expiresIn: config.jwtExpiry,
      issuer: "mini-app-sow",
    },
  );
}

export function validateJWT(token) {
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    return payload;
  } catch (error) {
    logger.warn(error);
    return null;
  }
}

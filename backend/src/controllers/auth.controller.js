import argon2 from "argon2";
import { getUserByEmail } from "../db/queries/users.js";
import { config } from "../lib/config.js";
import { logger } from "../lib/log.js";
import { createJWT } from "../lib/token.js";

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(422).json({
      message: "Email (of string-type) is required",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(422).json({
      message: "Password (of string-type) is required",
    });
  }

  const cleanedEmail = email.trim();

  try {
    const user = await getUserByEmail(cleanedEmail);
    if (!user) {
      return res.status(401).json({
        message: "Invalid email/password",
      });
    }

    const matches = await argon2.verify(user.passwordHash, password);
    if (!matches) {
      return res.status(401).json({
        message: "Invalid email/password",
      });
    }

    const token = createJWT(user);
    res.cookie("JWT_COOKIE", token, {
      expires: new Date(Date.now() + config.jwtExpiry * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    logger.error(error.message);
    return res.status(401).json({
      message: "Failed to login",
    });
  }
}

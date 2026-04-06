import argon2 from "argon2";
import { getUserByEmail } from "../db/queries/users.js";
import { logger } from "../lib/log.js";

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(422).json({
      code: 422,
      message: "Email (of string-type) is required",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(422).json({
      code: 422,
      message: "Password (of string-type) is required",
    });
  }

  const cleanedEmail = email.trim();

  try {
    const { id, passwordHash } = await getUserByEmail(cleanedEmail);
    const matches = await argon2.verify(passwordHash, password);
    if (!matches) {
      return res.send(401).json({
        code: 401,
        message: "Invalid email/password",
      });
    }

    // TODO: Create and attach JWT

    return res.status(200).json({
      code: 200,
      message: `${id} has successfully logged in!`,
    });
  } catch (error) {
    logger.error(error.message);
    return res.status(401).json({
      code: 401,
      message: "Failed to login",
    });
  }
}

import { validateJWT } from "../lib/token.js";

export function authMiddleware(req, res, next) {
  const cookie = req.cookies["JWT_COOKIE"];
  if (!cookie) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const payload = validateJWT(cookie);
  if (!payload) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = payload;
  next();
}

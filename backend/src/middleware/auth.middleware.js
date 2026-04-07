export function authMiddleware(req, res, next) {
  const cookie = req.cookies["JWT_COOKIE"];
  if (!cookie) {
    return res.status(401).json({ message: "Invalid cookie" });
  }
  next();
}

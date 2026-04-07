import cookieParser from "cookie-parser";
import express from "express";
import { config } from "./lib/config.js";
import { logger } from "./lib/log.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { logMiddleware } from "./middleware/log.middleware.js";
import { authRouter } from "./routes/auth.route.js";
import { productRouter } from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logMiddleware);

app.use("/auth", authRouter);
app.use("/products", authMiddleware, productRouter);

app.get("/", authMiddleware, (req, res) => {
  res.send("Hello, world!");
});

app.listen(config.port, () =>
  logger.info(`Server running on port ${config.port}`),
);

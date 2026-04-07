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

app.use("/api/v1/healthz", (_, res) => res.status(200).send("OK"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", authMiddleware, productRouter);

app.listen(config.port, () =>
  logger.info(`Server running on port ${config.port}`),
);

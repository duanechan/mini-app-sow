import express from "express";
import { config } from "./lib/config.js";
import { logger } from "./lib/log.js";
import { logMiddleware } from "./middleware/log.middleware.js";
import { authRouter } from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(logMiddleware);

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(config.port, () =>
  logger.info(`Server running on port ${config.port}`),
);

import express from "express";
import { getOrThrow } from "./lib/config.js";
import { logger } from "./lib/log.js";
import { usersRouter } from "./routes/users.route.js";

const PORT = getOrThrow("PORT");
const app = express();

app.use(express.json());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));

import "dotenv/config";
import express from "express";
import { port } from "./lib/config.js";
import { logger } from "./lib/log.js";
import { usersRouter } from "./routes/users.route.js";

const app = express();

app.use(express.json());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => logger.info(`Server running on port ${port}`));

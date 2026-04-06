import express from "express";
import { usersRouter } from "./routes/users.route.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

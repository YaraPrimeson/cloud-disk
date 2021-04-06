const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(PORT, () => {
      console.log("server start on port", PORT);
    });
  } catch (e) {}
};

start();

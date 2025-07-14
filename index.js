import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 3000

app.use(express.json()); 

app.use("/api", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`server is started at ${port}`);
});

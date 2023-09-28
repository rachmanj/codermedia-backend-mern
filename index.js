import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/mern_db");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.listen(5000, () => {
  () => console.log("Server running on port 5000");
});

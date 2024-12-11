import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
// dotenv.config();

import express from "express";
import mongoose from "mongoose";
import authRoutes from './routes/auth.js';
const dbUrl = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/chat-app';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

console.log('MONGO_DB_URL:', process.env.MONGO_DB_URL);

const app = express();

app.use('/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

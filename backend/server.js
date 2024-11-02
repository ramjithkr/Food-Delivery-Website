import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import apiRouter from "./src/routes/index.js";

// Load environment variables
dotenv.config(); 

// App config
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api enpoints
app.use("/api",apiRouter)

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

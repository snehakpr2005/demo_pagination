import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());


connectDB();
app.use("/api/users", userRoutes);
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on port${PORT}`);
});
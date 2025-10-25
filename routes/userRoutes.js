// routes/userRoutes.js
import express from "express";
import { addUsers, getPaginatedUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/seedUsers", addUsers);
router.get("/list", getPaginatedUsers);

export default router;

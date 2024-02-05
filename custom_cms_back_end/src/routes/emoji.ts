// routes/userRoutes.js
import express from "express";
const router = express.Router();
import emojis from "../api/emojis";

router.get("/", emojis);

export default router;

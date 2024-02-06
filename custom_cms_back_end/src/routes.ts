const express = require("express");
import authRouter from "./routes/auth";

const router = express.Router();

router.use("/api", [authRouter]);

export default router;

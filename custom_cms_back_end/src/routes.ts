const express = require("express");
import userRouter from "./routes/users";

const router = express.Router();

router.use("/api", [userRouter]);

export default router;

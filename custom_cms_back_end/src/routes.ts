const express = require("express");
import userRouter from "./routes/users";

const router = express.Router();

router.use("/users", [userRouter]);

export default router;

const express = require("express");
import Emoji from "./routes/emoji"

const router = express.Router();

router.use("/", [Emoji]);

export default router;

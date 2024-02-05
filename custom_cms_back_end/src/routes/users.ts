import express from "express";
import createUser from "../controller/users/create";

const router = express.Router();

router.use("/users", [createUser]);

export default router;

import express from "express";
import { createUser } from "../controller/users/users";

const router = express.Router();

router.post("/create", createUser);

export default router;

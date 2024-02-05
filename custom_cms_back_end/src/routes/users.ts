import express from "express";
import { createUser } from "../contoller/users";

const router = express.Router();

router.post("/create", createUser);

export default router;

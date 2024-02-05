import express from "express";
import createUser from "../controller/users/create";

const router = express.Router();

router.post("/create", createUser);

export default router;

import express from "express";
import signup from "../controller/auth/signup";

const authRouter = express.Router();

authRouter.post("/auth/signup", signup);

export default authRouter;

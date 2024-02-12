import express from "express";
import signup from "../controller/auth/signup";
import signin from "../controller/auth/signin";
import currentUser from "../controller/auth/current-user";
import signout from "../controller/auth/signout";

const authRouter = express.Router();

authRouter.post("/auth/signup", signup);
authRouter.post("/auth/signin", signin);
authRouter.get("/auth/currentuser", currentUser);
authRouter.post("/auth/signout", signout);

export default authRouter;

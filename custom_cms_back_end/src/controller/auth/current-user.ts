import express, { Request, Response } from "express";
import { validateCurrentUser } from "../../middlewares/validate-current-user";

const router = express.Router();

const currentUser = [
    validateCurrentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  },
];


export default currentUser;

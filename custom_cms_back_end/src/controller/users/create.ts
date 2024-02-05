import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Create a new user
router.post(
  "/create",
  [body("email").isEmail().withMessage("Email must be valid")],
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    res.status(200).send("ss");
  }
);

export default router;

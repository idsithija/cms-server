import { Request, Response } from "express";
import User from "../../database/models/user/user";
import { body, validationResult } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";

// Create a new user
const createUser = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid email address"),
  body("password").trim().notEmpty().withMessage("Password is required"),
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    // // Create a new user in the database
    // const newUser = await User.create({ username, email, password });

    // // Send the created user as a response
    res.status(201).json("ss");
  },
];

export default createUser;

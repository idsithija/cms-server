import { Request, Response } from "express";
import User from "../../database/models/user/user";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { BadRequestError } from "../../errorHandlers";
import jwt from "jsonwebtoken";

const signup = [
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

    const existingUserByUserName = await User.findOne({
      where: { username },
    });

    if (existingUserByUserName) {
      throw new BadRequestError("Username is already taken");
    }

    const existingUserByEmail = await User.findOne({
      where: { email },
    });

    if (existingUserByEmail) {
      throw new BadRequestError("Email is already taken");
    }

    const user = await User.build({
      username,
      email,
      password,
    });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  },
];

export default signup;

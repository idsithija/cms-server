import express, { Request, Response } from "express";
import User from "../database/models/user/user";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;

    // Create a new user in the database
    const newUser = await User.create({ username, email });

    // Send the created user as a response
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

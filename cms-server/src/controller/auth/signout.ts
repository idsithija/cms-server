import { Request, Response } from "express";

const signout = [
  (req: Request, res: Response) => {
    req.session = null;
    res.clearCookie("express:sess");
    res.send({});
  },
];

export default signout;

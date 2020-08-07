import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  // saving user
  const { username, email, password } = req.body;

  const newUser: IUser = new User({
    username,
    email,
    password,
  });

  // encrypt password
  newUser.password = await newUser.encryptPassword(newUser.password);

  const user = await newUser.save();

  // token
  const token: string = jwt.sign(
    { _id: user._id },
    process.env.SECRET_KEY || "tokentest"
  );

  res.header("token", token).json(user);
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "Email or password is wrong" });

  // validating password
  const match: boolean = await user.validatePassword(password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  const token: string = jwt.sign(
    { _id: user._id },
    process.env.SECRET_KEY || "tokentest",
    {
      expiresIn: 60 * 60 * 24, // expires in 24h
    }
  );

  res.header("token", token).json(user);
};

export const profile = async (req: Request, res: Response) => {
  const { userId } = req;
  const user = await User.findById(userId, {password: 0});

  if (!user) return res.status(404).json("No user found");

  res.json(user);
};

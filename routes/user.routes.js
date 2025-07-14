import express, { Router } from "express";
import {
  createUser,
  deleteByid,
  deleteUser,
  home,
  readUser,
  ReaduserName,
  updateByid,
  updateUser,
} from "../controllers/user.controllers.js";

let userRouter = express(Router());

userRouter.get("/", home);

// CRUD Operations
userRouter.post("/create", createUser);

userRouter.get("/read", readUser);

userRouter.get("/read/:userName", ReaduserName);

userRouter.put("/update/:id", updateByid);

userRouter.put("/update", updateUser);

userRouter.delete("/delete/:id", deleteByid);

userRouter.delete("/delete", deleteUser);

export default userRouter;

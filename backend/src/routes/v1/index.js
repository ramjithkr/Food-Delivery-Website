import express from "express";
import foodRouter from "./foodRoute.js";
import userRouter from "./userRoute.js";

const v1Router = express.Router();

v1Router.use("/food", foodRouter);
v1Router.use("/user", userRouter);


export default v1Router;

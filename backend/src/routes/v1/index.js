import express from "express";
import foodRouter from "./foodRoute.js";

const v1Router = express.Router();

v1Router.use("/food", foodRouter);


export default v1Router;

import express from "express";
import path from "path";

import { addFood, listFood, removeFood } from "../../controllers/foodController.js";
import { upload } from "../../config/multerStorageEngine.js";

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.use("/image", express.static(path.join("src", "uploads")));
foodRouter.use("/list", listFood);
foodRouter.post("/remove",removeFood)
export default foodRouter;

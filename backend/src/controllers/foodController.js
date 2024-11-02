import path from "path";
import foodModel from "./../models/foodModel.js";
import fs from "fs";

// Add food item
export const addFood = async (req, res) => {
  // let image_filename = ${req.file.filename;

  let image_filename = req.file ? req.file.filename : null;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.status(201).json({
      success: true,
      message: "Food item added successfully",
      food,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in addFood",
      error: error.message,
    });
  }
};

// all food list

export const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(201).json({
      success: true,
      message: "Food list added successfully",
      foods,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in listFood",
      error: error.message,
    });
  }
};

// remove food item

export const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    // Check if food item exists
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    // Remove image file
    fs.unlink(path.join("src", "uploads", food.image), (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      }
    });

    // Remove food item from database
    await foodModel.findByIdAndDelete(req.body.id);

    res.status(200).json({
      success: true,
      message: "Food item removed successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in removeFood",
      error: error.message,
    });
  }
};
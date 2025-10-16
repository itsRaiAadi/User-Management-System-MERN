import express from "express";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const route = express.Router();

route
  .post("/add-user", createUser)
  .get("/get-users", getAllUsers)
  .get("/get-user/:id", getUserById)
  .put("/update-user/:id", updateUser)
  .delete("/delete-user/:id", deleteUser);

export default route;

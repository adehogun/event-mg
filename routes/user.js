const express = require("express");
const { createUsers, getUsers } = require("../controllers/user");

const userRouter = express.Router();

// Route to create a new user
userRouter.post("/", createUsers);

// Route to get all users
userRouter.get("/", getUsers);

module.exports = userRouter;

const UserController = require("../controllers/UserController");
const userRouter = require("express").Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/add", UserController.add);
userRouter.get("/delete", UserController.delete);
userRouter.get("/edit", UserController.edit);
userRouter.get("/search", UserController.search);

module.exports = userRouter;

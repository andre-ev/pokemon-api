const { Router } = require("express");

const userRouter = Router();

userRouter.get("/get", (req, res) => {
  res.send("Hola mundo!");
});

module.exports = userRouter;

const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3001;
const router = require("./routes/index");
const userRouter = require("./routes/userRouter");
const favsRouter = require("./routes/favsRouter");

server.use(express.json()); // Para que funcione mi Srv con formato Json
server.use(cors()); // middleware para permitir la respuestas de back desde el front
server.use(morgan("dev"));

// Utilizando el middleware server.use para modularizar las rutas
server.use("/pokemon", router);
server.use("/users", userRouter);
server.use("/favs", favsRouter);


server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

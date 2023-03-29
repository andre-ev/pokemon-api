const { Router } = require("express");
let favs = require("../utils/favs");

const favsRouter = Router();

favsRouter.post("/create", (req, res) => {
  favs.push({ ...req.body });
  return res.status(201).json(favs);
});

favsRouter.get("/get", (req, res) => {
  return res.status(200).json(favs);
});

favsRouter.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((pok) => pok.id !== Number(id));
  return res.status(200).json(favs);
});

module.exports = favsRouter;

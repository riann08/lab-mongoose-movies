const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../model/Celebrity");

router.get("/", async (req, res, next) => {
  try {
    const allCelebrities = await CelebrityModel.find();

    res.render("celebrities/index", { allCelebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res, next) => {
  try {
    res.render("celebrities/new");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const newCelebrity = { ...req.body };
  console.log(newCelebrity);

  try {
    await CelebrityModel.create(newCelebrity);
    res.redirect("/celebrities/");
  } catch (err) {
    next(err);
    res.redirect("/celebrities/new");
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const celebrity = await CelebrityModel.findByIdAndRemove(req.params.id);
    res.render("celebrities/index", celebrity);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities/");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebrity = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", celebrity);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const celebrity = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/edit", celebrity);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const updatedCeleb = {...req.body};
    await CelebrityModel.findByIdAndUpdate(req.params.id, updatedCeleb);
    res.redirect("/celebrities/");
  } catch (err) {
    next(err);
  }
});


module.exports = router;

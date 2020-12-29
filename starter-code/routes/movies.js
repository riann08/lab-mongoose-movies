const express = require("express");
const router = express.Router();
const MovieModel = require("./../model/Movie");

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await MovieModel.find();

    res.render("movies/index", { allMovies });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res, next) => {
  try {
    res.render("movies/new");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const newMovie = { ...req.body };
  console.log(newMovie);
  try {
    await MovieModel.create(newMovie);
    res.redirect("/movies/");
  } catch (err) {
    next(err);
    res.redirect("/movies/new");
  }
});


router.get("/:id/edit", async (req, res, next) => {
    try {
      const movie = await MovieModel.findById(req.params.id);
      res.render("movies/edit", movie);
    } catch (err) {
      next(err);
    }
  });
  
  router.post("/:id", async (req, res, next) => {
    try {
      const updatedMovie = {...req.body};
      await MovieModel.findByIdAndUpdate(req.params.id, updatedMovie);
      res.redirect("/movies/");
    } catch (err) {
      next(err);
    }
  });

router.get("/:id/delete", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndDelete(req.params.id);
    res.redirect("/movies/");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movies/show", movie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

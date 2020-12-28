const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../model/Celebrity");

router.get("/", async(req, res, next) => {
  try{
    const allCelebrities = await CelebrityModel.find();

    res.render("celebrities/index", {allCelebrities});
  } catch (err) {
    next (err);
  }
  });

  
  router.get("/new",(req, res, next) => {
    try{
      res.render("celebrities/new");
    } catch (err) {
      next (err);
    }
  });

  router.post("/", async(req, res, next) => {
    const newCelebrity = { ... req.body};
    console.log(newCelebrity);

    try{
      await CelebrityModel.create(newCelebrity);
      res.redirect("/celebrities/");
    } catch (err) {
      next (err);
      res.redirect("/celebrities/new"); 
    }
  });
  
  router.get("/:id", async(req, res, next) => {
    try{
      const celebrity = await CelebrityModel.findById(req.params.id);
      res.render("celebrities/show", celebrity);
    } catch (err) {
      next (err);
    }
    });


  module.exports = router;

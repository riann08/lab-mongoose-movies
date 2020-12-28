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

  router.get("/:id", async(req, res, next) => {
    try{
      const celebrity = await CelebrityModel.findById(req.params.id);
      res.render("celebrities/show", celebrity);
    } catch (err) {
      next (err);
    }
    });
  
module.exports = router;

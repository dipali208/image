module.exports = app => {
    const fav = require("../controllers/favourite.controller.js");
    
    var router = require("express").Router();
    router.post("/", fav.insert);
    router.delete("/remove/:questionId", fav.delete);
    app.use('/api/fav', router);
  };
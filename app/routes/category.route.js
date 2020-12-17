module.exports = app => {
   // const cat = require("../controllers/category.controller.js");
    const cat1 = require("../controllers/categories.controller.js");
    var router = require("express").Router();
   // router.post("/", cat.insert);
   // router.get("/",cat.getCategoryName);
    router.post("/",cat1.AddArticle);
    app.use('/api/cat', router);
  };
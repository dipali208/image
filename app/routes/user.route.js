module.exports = app => {
    const user = require("../controllers/user.controller.js");
    
    var router = require("express").Router();
    router.post("/", user.insert);
    router.get("/list", user.getUserData);
    app.use('/api/user', router);
  };
module.exports = app => {
    const feedback = require("../controllers/feedback.controller.js");
    var router = require("express").Router();
    router.post("/", feedback.insert);
    app.use('/api/feedback', router);
  };
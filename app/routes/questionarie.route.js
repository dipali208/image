module.exports = app => {
    const Question = require("../controllers/questionarie.controller.js");
    var router = require("express").Router();
    router.get("/:quizId", Question.getQuestions);
    app.use('/api/quiestionarie', router);
  };
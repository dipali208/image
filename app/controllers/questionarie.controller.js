const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.getQuestions = (req,res)=>{
    db.sequelize.query("select * from questionarie where quizId=? ORDER BY RAND() LIMIT 10 ",{replacements: [ req.params.quizId],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }
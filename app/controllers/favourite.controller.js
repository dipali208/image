const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.insert=(req,res)=>{
    console.log(req.body,"body data");
    
  db.sequelize.query("insert into favourite (userId,questionId,gameId) values(?,?,?)",
  {replacements: [ req.body.userId,req.body.questionId,req.body.gameId],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}

exports.delete=(req,res)=>{
    console.log(req.body,"vfdjkvn");
    db.sequelize.query("delete from favourite where  questionId=?",
    {replacements: [req.params.questionId],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
        res.send(data);
       // console.log(data);
      });
  }
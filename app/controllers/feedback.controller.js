const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.insert=(req,res)=>{
    console.log(req.body,"body data");

    db.sequelize.query("delete from feedback where userId=?",
    {replacements: [req.body.userId],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
        res.send(data);
       // console.log(data);
      });
    
  db.sequelize.query("insert into feedback (userId,experience) values(?,?)",
  {replacements: [ req.body.userId,req.body.experience],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}


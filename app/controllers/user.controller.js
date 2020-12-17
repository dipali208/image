const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.insert=(req,res)=>{
    console.log(req.body,"body data");
    
  db.sequelize.query("insert into users (email,password,name,role) values(?,?,?,?)",
  {replacements: [ req.body.signUpEmail,req.body.signUpPassword1,req.body.signUpName,"User"],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}

exports.getUserData = (req,res)=>{
  db.sequelize.query("select * from users",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
      res.send(data);
     console.log(data);
    });
}
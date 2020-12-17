const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.insert=(req,res)=>{
    console.log(req.body,"body data");
    
  db.sequelize.query("insert into categories (categoryName) values(?)",
  {replacements: [ req.body.categoryName],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}

  exports.getCategoryName = (req,res)=>{
    db.sequelize.query("select * from categories",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }
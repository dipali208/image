const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

//Join 
// exports.getBy = (req,res)=>{
//   db.sequelize.query("select q.categoryId,c.categoryName,q.quizName from quiz q,categories c where c.categoryId =q.categoryId and q.userId=?", 
//   {replacements: [ req.body.userId],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
//      res.send(data);
//     // console.log(data);
//    })
//   }

//   //Insert Data
//   exports.insert=(req,res)=>{
//       console.log(req.body,"vfdjkvn");
      
//     db.sequelize.query("insert into categories(categoryName) values (?)",
//     {replacements: [ req.body.categoryName],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
//         res.send(data);
//       });
//   }

//   exports.insertName=(req,res)=>{
    
//   db.sequelize.query("insert into (categoryName) values (?)",
//   {replacements: [ req.body.categoryName],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
//       res.send(data);
//     });
// }

//   exports.update=(req,res)=>{
//   console.log(req.body,"vfdjkvn");
//   db.sequelize.query("update categories set categoryName=? where categoryId=?",
//   {replacements: [req.body.categoryName,req.params.categoryId],type: db.sequelize.QueryTypes.UPDATE }).then(data=>{
//       res.send(data);
//      // console.log(data);
//     });
// }

// exports.delete=(req,res)=>{
//     console.log(req.body,"vfdjkvn");
//     db.sequelize.query("delete from categories where categoryId=? and categoryName=?",
//     {replacements: [req.params.categoryId,req.params.categoryName],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
//         res.send(data);
//        // console.log(data);
//       });
//   }

//   exports.addQuestion = (req,res)=>{
//     db.sequelize.query("insert into questionarie(questionId,question,option1,option2,option3,option4,answer,quizId,categoryId,typeId) values (?,?,?,?,?,?,?,(select quizId from quiz where quizName=?),(select categoryId from categories where categoryName=?),(select typeId from questionType where typeName=?))",
//     {replacements: [req.body.questionId,req.body.question,req.body.option1,
//         req.body.option2,req.body.option3,req.body.option4,
//         req.body.answer,req.body.quizName,req.body.categoryName,req.body.typeName],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
//         res.send(data);
//        console.log(data);
//       });
//   }


//   exports.getQuizName = (req,res)=>{
//     db.sequelize.query("select * from quiz",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
//         res.send(data);
//        console.log(data);
//       });
//   }
  



// //   exports.getQuizName = (req,res)=>{
// //     db.sequelize.query("select * from quiz where quizName=?",{replacements: [req.body.quizName],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
// //         res.send(data);
// //        console.log(data);
// //       });
//  // }

//   exports.getCategoryName = (req,res)=>{
//     db.sequelize.query("select * from categories",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
//         res.send(data);
//        console.log(data);
//       });
//   }

//   exports.getTypeName = (req,res)=>{
//     db.sequelize.query("select * from questionType",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
//         res.send(data);
//        console.log(data);
//       });
//   }



  //Insert Data
  exports.insert=(req,res)=>{
      console.log(req.body,"vfdjkvn");
      
    db.sequelize.query("insert into quiz(quizName,categoryId,duration,count) values (?,?,?,?)",
    {replacements: [ req.body.quizName,req.body.categoryId,req.body.duration,req.body.count],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
        res.send(data);
      });
  }

    exports.getQuizNameById = (req,res)=>{
    db.sequelize.query("select * from quiz where categoryId=?", 
    {replacements: [ req.params.id],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
       res.send(data);
      // console.log(data);
     })
    }

    
      exports.getQuizName = (req,res)=>{
    db.sequelize.query("select * from quiz",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }





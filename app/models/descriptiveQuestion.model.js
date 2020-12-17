// module.exports = (sequelize, Sequelize) => {
//     const question = sequelize.define("descriptiveQuestion",  {
//      desQuestionId:{
//           field:'desQuestionId',
//           type:Sequelize.INTEGER,
//           primaryKey:true,
//           autoIncrement:true
//       },
//       desQuestion: {
//         field:'desQuestion',
//         type: Sequelize.STRING(1000)
//       },
//       answer:{
//         type: Sequelize.STRING(1000)
//       },
//       quizId:{
//         type:Sequelize.INTEGER,
//         field: 'quizId',
//         references: {
//             model: 'quiz',
//             key: 'quizId'
//         }
//       },
//       categoryId:{
//         type:Sequelize.INTEGER,
//         field: 'categoryId',
//         references: {
//             model: 'categories',
//             key: 'categoryId'
//         }
//       }
      
//     },{
//         freezeTableName: true, // Model tableName will be the same as the model name
//         timestamps: false,
//         underscored: true
//     });
  
//     return question;
//   };
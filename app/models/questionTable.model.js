module.exports = (sequelize, Sequelize) => {
    const question = sequelize.define("questionarie",  {
     questionId:{
          field:'questionId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      question: {
        type: Sequelize.STRING(1000)
      },
      option1:{
        type: Sequelize.STRING
      },
      option2:{
        type: Sequelize.STRING
      },
      option3:{
        type: Sequelize.STRING
      },
      option4:{
        type: Sequelize.STRING
      },
      answer:{
        type: Sequelize.STRING
      },
      quizId:{
        type:Sequelize.INTEGER,
        field: 'quizId',
        references: {
            model: 'quiz',
            key: 'quizId'
        }
      },
      categoryId:{
        type:Sequelize.INTEGER,
        field: 'categoryId',
        references: {
            model: 'categories',
            key: 'categoryId'
        }
      },
      typeId:{
        type:Sequelize.INTEGER,
        field: 'typeId',
        references: {
            model: 'questionType',
            key: 'typeId'
        }
      }
      
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return question;
  };
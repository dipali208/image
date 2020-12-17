module.exports = (sequelize, Sequelize) => {
    const quiz = sequelize.define("quiz",  {
     quizId:{
          field:'quizId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      quizName: {
        field:'quizName',
        type: Sequelize.STRING
      },
        userId:{
        type:Sequelize.INTEGER,
        field: 'userId',
        references: {
            model: 'users',
            key: 'userId'
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
      duration:{
        type: Sequelize.TIME
      },
      quizDate:{
        type: Sequelize.DATEONLY
      },
      count:{
        type:Sequelize.INTEGER,
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return quiz;
  };
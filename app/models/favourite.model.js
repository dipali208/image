module.exports = (sequelize, Sequelize) => {
    const favourite = sequelize.define("favourite",  {
        favouriteId:{
          field: 'favouriteId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },

      userId:{
        type:Sequelize.INTEGER,
        field: 'userId',
        references: {
            model: 'users',
            key: 'userId'
        }
      },
      quizId:{
        type:Sequelize.INTEGER,
        field: 'questionId',
        references: {
            model: 'quiz',
            key: 'quizId'
        }
      },
      gameId:{
        type:Sequelize.INTEGER,
        field: 'gameId',
        references: {
            model: 'game',
            key: 'gameId'
        }
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return favourite;
  };
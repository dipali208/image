module.exports = (sequelize, Sequelize) => {
    const Score = sequelize.define("scoreBoard",  {
        scoreId:{
          field: 'scoreId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      gameId:{
        type:Sequelize.INTEGER,
        field: 'gameId',
        references: {
            model: 'game',
            key: 'gameId'
        }
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
        field: 'quizId',
        references: {
            model: 'quiz',
            key: 'quizId'
        }
      },
      score: {
        type: Sequelize.INTEGER
      },
      gameDate:{
        type: Sequelize.DATEONLY
      }
    
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Score;
  };
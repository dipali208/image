module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("timeBasedGameResult",  {
      gameResultId:{
          field: 'gameResultId',
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
      timeToFinish: {
        field: 'timeToFinish',
        type: Sequelize.TIME
      },
      gameDate:{
        type: Sequelize.DATEONLY
      }
    
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Game;
  };
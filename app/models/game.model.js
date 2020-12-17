module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game",  {
      gameId:{
          field: 'gameId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      gameName: {
        field: 'gameName',
        type: Sequelize.STRING
      }
      
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Game;
  };
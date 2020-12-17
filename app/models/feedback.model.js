module.exports = (sequelize, Sequelize) => {
    const feedback = sequelize.define("feedback",  {
        feedbackId:{
          field: 'feedbackId',
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
      experience:{
        type:Sequelize.STRING,
        field: 'experience',
      }
    },
      {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return feedback;
  };
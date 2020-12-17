module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users",  {
      userId:{
          field: 'userId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      role:{
          type:Sequelize.ENUM,
          values:['Admin','User']
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return Users;
  };
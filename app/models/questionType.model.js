module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("questionType",  {
        typeId:{
          field: 'typeId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      typeName: {
        field: 'typeName',
        type: Sequelize.STRING
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return category;
  };
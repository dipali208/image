module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("categories",  {
        categoryId:{
          field: 'categoryId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      categoryName: {
        field: 'categoryName',
        type: Sequelize.STRING
      },
      catimage: {type: Sequelize.BLOB('long'), allowNull:false}
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
  
    return category;
  };
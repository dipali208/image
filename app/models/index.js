const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/users.model.js")(sequelize, Sequelize);
db.categories = require("../models/categories.model.js")(sequelize, Sequelize);
db.quiz = require("../models/quiz.model.js")(sequelize, Sequelize);
db.questionarie = require("../models/questionTable.model.js")(sequelize, Sequelize);
//db.descriptiveQuestion = require("../models/descriptiveQuestion.model.js")(sequelize, Sequelize);
db.game = require("../models/game.model.js")(sequelize, Sequelize);
db.timeBasedGameResult = require("../models/timeGameResult.model.js")(sequelize, Sequelize);
db.scoreBoard = require("../models/scoreBoard.model.js")(sequelize, Sequelize);
db.state = require("../models/state.model.js")(sequelize, Sequelize);
db.favourite = require("../models/favourite.model.js")(sequelize, Sequelize);
db.questionType = require("../models/questionType.model.js")(sequelize, Sequelize);
db.feedback = require("../models/feedback.model.js")(sequelize, Sequelize);
db.questionarie = require("../models/questionTable.model.js")(sequelize, Sequelize);

module.exports = db;



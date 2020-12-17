const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require('cors')

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/models");
db.sequelize.sync();
require("./app/routes/quiz.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/favourite.route")(app);
require("./app/routes/category.route")(app);
require("./app/routes/feedback.route")(app);
require("./app/routes/questionarie.route")(app);
//require("./app/routes/turorial.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}.");
});
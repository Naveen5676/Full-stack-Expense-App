const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();
app.use(cors());

const userRoutes = require("./routes/user");
app.use(bodyParser.json({ extended: false }));

app.use(userRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));

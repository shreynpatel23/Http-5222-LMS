//Loads the express module
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv  = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";

//Loads the handlebars module
const { engine } = require("express-handlebars");

app.engine(
  "hbs",
  engine({
    defaultLayout: "index",
    layoutsDir: __dirname + "/views",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

//Serves static files (we need it to import a css file)
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route
app.get("/", (req, res) => res.render("index"));

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

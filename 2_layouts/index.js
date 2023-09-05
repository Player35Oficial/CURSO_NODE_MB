const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.get("/", (_, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App funcionando!");
});

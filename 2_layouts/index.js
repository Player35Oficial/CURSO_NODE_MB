const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.get("/dashboard", (req,res) => {
  res.render("dashboard")
})

app.get("/", (_, res) => {

  const user = {
    name: "Yuri",
    surname: "Santana",
    age: 19
  }

  const palavra = "Teste"

  const auth = false

  res.render("home", {user: user, palavra, auth});
});

app.listen(3000, () => {
  console.log("App funcionando!");
});

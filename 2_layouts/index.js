const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views")

app.get("/dashboard", (req,res) => {

  const items = ["item a", "item b", "item C"]
  
  res.render("dashboard", { items })
})

app.get("/", (_, res) => {

  const user = {
    name: "Yuri",
    surname: "Santana",
    age: 19
  }

  const palavra = "Teste"

  const auth = true

  const approved = false

  res.render("home", {user: user, palavra, auth, approved});
});

app.get('/post', (req, res) => {
  const post = {
    title: "Aprender NodeJs",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js....",
    comments: 4
  }

  res.render('blogpost', {post})
})

app.listen(3000, () => {
  console.log("App funcionando!");
});

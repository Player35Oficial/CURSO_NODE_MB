const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views")

app.use(express.static("public"));

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
});

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: "Aprender nodeJS",
      category: "Javascript",
      body: "Teste",
      comments: 4
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Teste",
      comments: 4
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Teste",
      comments: 4
    },
  ]

  res.render('blog', { posts })
})

app.listen(4000, () => {
  console.log("App funcionando!");
});

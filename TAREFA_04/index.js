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

app.get('/', (_, res) => {

  const products = [
    {
      name: "Samsung Galaxy M12",
      launch_year: "2021",
      company: "Samsung",
    },
    {
      name: "Samsung Galaxy M31",
      launch_year: "2022",
      company: "Samsung",
    },
    {
      name: "iPhone 13",
      launch_year: "2021",
      company: "Apple",
    },
    {
      name: "iPhone 14",
      launch_year: "2022",
      company: "Apple",
    },
  ]

  res.render("home", { products });
})

app.listen(3000, () => {
  console.log('App rodando')
})
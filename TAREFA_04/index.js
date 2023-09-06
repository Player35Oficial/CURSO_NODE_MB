const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "Samsung Galaxy M12",
    launch_year: "2021",
    company: "Samsung",
  },
  {
    id: 2,
    name: "Samsung Galaxy M31",
    launch_year: "2022",
    company: "Samsung",
  },
  {
    id: 3,
    name: "iPhone 13",
    launch_year: "2021",
    company: "Apple",
  },
  {
    id: 4,
    name: "iPhone 14",
    launch_year: "2022",
    company: "Apple",
  },
];

app.get("/", (_, res) => {
  res.render("home", { products });
});

app.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).send("Produto não encontrado!");
  } else {
    res.render("productDetail", { product });
  }
});

app.listen(3000, () => {
  console.log("App rodando");
});

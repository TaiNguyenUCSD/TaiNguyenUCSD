const express = require("express");
const app = express();

// Set static assets
app.use(express.static("/public/assets"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/styles", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

// Set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", __dirname + "/public/layout");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

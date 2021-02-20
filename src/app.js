const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");

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
app.use(expressLayouts);

// Routes
app.use("/", indexRouter);
app.use("/profile", profileRouter);

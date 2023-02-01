var express = require("express");
var app = express();

app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/product", (req, res) => res.render("product"));
app.get("/product/:id", (req, res) => res.render("single-product"));
app.get("/clients", (req, res) => res.render("client"));
app.get("/history", (req, res) => res.render("history"));
app.get("/admin", (req,res) => res.render("admin"))


var server = app.listen(3000, function () {
  console.log("listening to port 3000");
});

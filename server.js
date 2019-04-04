//DEPENDENCIES
var express = require("express");
var path = require("path");

// var friendsNow = require("./friends.js");
// console.log(friends);

//SET UP EXPRESS
var app = express();
var PORT = 3000;

// 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.jason());

//gets the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("app/data/friends.js", function(req, res) {
  return res.json(friendsNow.friends);
});

// app.get("/server", function(req, res) {
//   res.send("Welcome to Blank Page");
// });

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

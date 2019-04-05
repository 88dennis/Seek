// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require("express");

// ================================================================================
//SET UP EXPRESS
// This sets up the basic properties for our express server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// ================================================================================
// Sets up the Express app to handle data parsing
//QUICK PITSTOP


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

//MODULIZING
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// ================================================================================

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

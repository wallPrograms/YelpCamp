var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// body-parser is used in order to read HTTP post data
// it reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs"); // not to write .ejs for the views in the res.render routes

// Temporary array before adding a database
var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
];
    
app.get("/", function(req, res) {
    res.render("landing");
});

// Show all the backgrounds
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds}); // first campgrounds is name we want to give it to use in the views ejs file and second campgrounds is the data we are passing in
});

// same route as the get route
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name; // req.body gets the data from the form
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    campgrounds.push(newCampground);
    
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// show the form that will send the data to the post /campgrounds route
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(3000, function() {
    console.log("The app server has started");
});
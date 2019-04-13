var express = require("express");

var router = express.Router();

var course = require("../models/burger.js");
//this needs get route for /

router.get("/", function(req, res) {
  course.all(function(data) {
    var hbsObject = {
      courses: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//this needs a post route for newCourse
router.post("/api/courses", function(req, res){
  course.insertOne(req.body.name, function(result){
    res.json(result);
  })
});

//this needs a put route for updateDevoured

router.put("/api/played/:id", function(req, res){
  course.updateOne(req.params.id, function(result){
    res.status(200).end();
  })
});


// Export routes for server.js
module.exports = router;

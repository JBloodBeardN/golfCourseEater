var orm = require("../config/orm.js");

var courses = {
  all: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  insertOne: function(name, callback){
    orm.insertOne(name, function(res){
      callback(res);
    })
  },
  updateOne: function(id, callback){
    orm.updateOne(id, function(res){
      callback(res);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = courses;

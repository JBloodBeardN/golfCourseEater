var connection = require("../config/connection.js");

//if I have helper functions they go here


//start of orm object to export
var orm = {

//needs a orm for read data from table
selectAll: function(callback){
    // var queryString = "SELECT * FROM "+tableInput+ ";";
    // connection.query(queryString, function(err, data){
    //     if(err) {throw err;}
    //     callback(data);
    // });
    connection.query("SELECT * FROM courses", function(err, data){
        if(err) {throw err;}
        callback(data);
    });
},

// //needs a orm for update data on devour
insertOne: function(name, callback){
    connection.query("INSERT INTO courses (name) VALUES (?)",[name],function(err, data){
        if(err){throw err;}
        callback(data)
    });

},

// //needs a orm for add new record to table
updateOne: function(id, callback){
connection.query("UPDATE courses SET played = true WHERE id = ?",[id],function(err, data){
    if(err){throw err;}
    callback(data)
});

}


};


module.exports = orm;

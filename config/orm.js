var connection = require("../config/connection.js");

//if I have helper functions they go here


//start of orm object to export
var orm = {

//needs a orm for read data from table
selectAll: function(tableInput, callback){
    var queryString = "SELECT * FROM "+tableInput+ ";";
    connection.query(queryString, function(err, data){
        if(err) {throw err;}
        callback(result);
    });
    // connection.query("SELECT * FROM ?",[tableInput], function(err, data){
    //     if(err) {throw err;}
    //     callback(result);
    // });
},

//needs a orm for update data on devour
insertOne: function(){


},

//needs a orm for add new record to table
updateOne: function(){


}


};


module.exports = orm;

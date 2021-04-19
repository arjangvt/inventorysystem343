var connection = require("../config/connection");
var express = require('express');
var users = express.Router();


users.get('/users', function(req, res){
	console.log("/users/");
	//var id = req.params.id;
	//connection.query('SELECT * FROM tblUsers WHERE UserName = "aj123" and Password=?', id, (error, results, fields) => {
        //if (error) throw error;
        //res.send(results);

        //});

})


module.exports = users;


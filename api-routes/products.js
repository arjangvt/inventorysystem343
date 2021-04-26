var connection = require("../config/connection");
var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
        console.log("/products");
        var password = req.params.password;
        connection.query('SELECT * FROM tblProducts', (error, results, fields) => {
        if (error) throw error;
        res.send(results);

        });

})


router.get('/addproduct/:pname/:model/:serial', function(req, res){
	console.log("/addproduct");
	var name = req.params.pname;
	var model = req.params.model;
	var serial = req.params.serial;

	connection.query('INSERT INTO tblProducts (name, model, serial_number) VALUES ("' + name + '","' + model + '","' + serial + '")', (error, results, fields) => {
	
	if (error) throw error;
	res.send(results);
	
	});

})


module.exports = router;


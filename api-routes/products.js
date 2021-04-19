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


module.exports = router;


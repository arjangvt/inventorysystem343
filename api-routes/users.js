var connection = require("../config/connection");
var express = require('express');
var router = express.Router();


router.get('/:password', function(req, res){
        console.log("/users/");
        var password = req.params.password;
        connection.query('SELECT * FROM tblUsers WHERE UserName = "aj123" and Password=?', password, (error, results, fields) => {
        if (error) throw error;
        res.send(results);

        });

})


module.exports = router;



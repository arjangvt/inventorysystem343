var express = require('express');
var router = express.Router();
var fs =  require('fs');


router.get('/', function (req, res) {
	console.log("/");

	fs.readFile('./html/index.html', null, function (error, data){
                if (error) {
                        res.writeHead(404);
                        res.write('Whoops! File not found!');
                } else {
                        res.write(data);

                }
                res.end();
	        });
	
})



module.exports = router;

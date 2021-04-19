var express = require('express');
var router = express.Router();
var fs =  require('fs');


router.get('/', function (req, res) {
        console.log("/html");

        fs.readFile('./html/main.html', null, function (error, data){
                if (error) {
                        res.writeHead(404);
                        res.write('Whoops! File not found!');
                } else {
                        res.write(data);

                }
                res.end();
                });

})

router.get('/product', function (req, res) {
	console.log("product list");
	fs.readFile('./html/product.html', null, function (error, data) {
		if (error) {
			res.writeHead(404);
			res.write('');
		} else {
			res.write(data);
		}
		res.end();

	});
})

module.exports = router;


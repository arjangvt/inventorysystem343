var index = require('./api-routes/index');
var users = require('./api-routes/users');
var products = require('./api-routes/products');
var html = require('./api-routes/html');

const http = require('http');
const express = require('express');

const http_port = 8000;
const express_port = 8001;

const server =  http.createServer();
const app = express();

app.listen(8000, function(){
        console.log("express started on port 8000");
});


app.use('/', index);
app.use('/users', users);
app.use('/html', html);
app.use('/products', products);
app.use(express.static('public'));


app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '/');
	res.setHeader('Access-Control-Allow-Origin', '/users');
	res.setHeader('Access-Control-Allow-Origin', '/html');
	res.setHeader('Access-Control-Allow-Origin', '/products');
    	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    	res.setHeader('Access-Control-Allow-Credentials', true);

    	next();
});



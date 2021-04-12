const routes = require('./api-routes/routes');
const models = require('./models/users');
const fs =  require('fs');

const http = require('http');
const express = require('express');

const http_port = 8000;
const express_port = 8001;


const server =  http.createServer();
const app = express();

app.use(express.static('public'));

server.on('request',(request, response) => {
	console.log(`URL: ${request.url}`);

	response.writeHead(200, {
                'Content-Type': 'text/html'
        });

	if (request.url == "/")
	{

		fs.readFile('./html/index.html', null, function (error, data){
                if (error) {
                        response.writeHead(404);
                        response.write('Whoops! File not found!');
                } else {
                        response.write(data);

                }
                response.end();
	        });

	}
	else
	{
		fs.readFile('./html/main.html', null, function(error, data){
			if (error) {
				response.writeHead(404);
				response.write("This is for main page!");
			} else {
				response.write(data);
			}
			response.end();

		});
		//response.write(request.url);
	}
	/*
        fs.readFile('./html/index.html', null, function (error, data){
                if (error) {
                        response.writeHead(404);
                        response.write('Whoops! File not found!');
                } else {
                        response.write(data);

                }
                response.end();
        }); */

});

server.listen(http_port, (error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server is listening on port ${http_port}`)
});

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    	res.setHeader('Access-Control-Allow-Credentials', true);

    	next();
});

routes(app);
models(app);
const express_server = app.listen(express_port, (error) => {
        if (error) return console.log(`Error: ${error}`);
        console.log(`Server is listening on port ${express_port}`);
});



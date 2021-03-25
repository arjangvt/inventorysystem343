const router = app => {
	app.get('/', (request, response) => {
		response.send({
			message :'Node, Node, Node'
	});
   });
};







module.exports = router;

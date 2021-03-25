const connection = require("../config/connection");

const getUser = app => {

	app.get('/users/:id', (request, response) => {
        const id = request.params.id;
        connection.query('SELECT * FROM tblUsers WHERE UeserName=?', id, (error, results, fields) => {
        if (error) throw error;
	response.send(results);

        });

   });
};


module.exports = getUser;

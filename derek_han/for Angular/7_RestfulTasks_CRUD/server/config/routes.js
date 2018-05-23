var tasks	= require('../controllers/tasks');


module.exports = (app) => {
	//ReSTFUL 7route => API 5 CRUD
	app.get('/tasks', tasks.index);
//  app.get('/tasks.new', tasks.new); 			// Angular
	app.post('/tasks', tasks.create);
//  app.get('/tasks/:id/edit', tasks.edit); 	// Angular
	app.get('/tasks/:id', tasks.show);
	app.patch('/tasks/:id', tasks.update);
	app.delete('/tasks/:id', tasks.destroy);

}




//API does not use redirects or renders.
//Only returns res.json()
//res.json doesn't need object ***
// NO ({task}), just "res.json(task)" or "res.json(err.errors)"
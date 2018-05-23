var path 	= require('path'),
	tasks	= require('../controllers/tasks');


module.exports = (app) => {
	app.get('tasks', tasks.index); 			//all
	app.get('tasks/:title', tasks.create); 	//render create form
	app.get('task/:id', tasks.show); 			//specific
	app.patch('tasks/:id', tasks.update); 		//update 
	app.delete('tasks/:id', tasks.destroy); 	//destroy

	// app.post('/tasks', tasks.create); 			//create 
	// app.get('/tasks/:id/edit', tasks.edit); 		// edit
}
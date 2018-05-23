var bikes = require('../controller/bikes.js'),
	users = require('../controller/users.js'),
	path=require('path')


module.exports = (app) => {
	app.get('/api/bikes',bikes.showAll)
	app.post('/api/bikes',bikes.create)
	app.get('/api/bikes/:id',bikes.show)
	app.put('/api/bikes/:id',bikes.update)
	app.delete('/api/bikes/:id',bikes.destroy)
	app.post('/api/users',users.create)
	// app.get('/api/users/:id',users.show)
	app.post('/api/login',users.login)
	app.post('/api/logout',users.logout)
	// app.put('/api/users/:id',users.update)
	// app.delete('/api/users/:id',users.destroy)
	app.get('/api/id',users.getid)
	app.post('/api/search',bikes.search)

	app.all('*',(req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	})
}
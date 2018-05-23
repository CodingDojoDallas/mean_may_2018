var products = require('../controller/products.js')
var path=require('path')

module.exports = (app) => {
	app.get('/api/products',products.showAll)
	app.post('/api/products',products.create)
	app.get('/api/products/:id',products.show)
	app.put('/api/products/:id',products.update)
	app.delete('/api/products/:id',products.destroy)

	app.all('*',(req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	})
}
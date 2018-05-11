var Quote = require('../models/quote')

module.exports = {
	index: (req, res) => {
		res.render('../client/views/index');
	},
	save: (req, res) => {
		var quotes = new Quote({ name: req.body.name, quote: req.body.quote });
    	quotes.save((err) => {
	        if(err){
	            console.log('something went wrong', err);
	            for (var key in err.errors) {
	                req.flash('registration', err.errors[key].message);
	                console.log(err)
	            }
	            res.redirect('/');
	        } 
	        else{ 
	            console.log('successfully added a quote!');
	            Quote.find({}, (err, quotes) => {
	                res.render('../client/views/quotes', { quotes: quotes });
	            }).sort({"$natural": -1});

        }
	})

}
}


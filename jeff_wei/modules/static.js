module.exports= function(request,response){
	const http = require('http');
const   fs = require('fs');
		if( request.url.includes(".css")){
			return fs.readFile(`.${request.url}`, 'utf8', function (errors, contents){
	            response.write(contents);  //  send response body
	            response.end(); // finished!
	        });
		}
		else if( request.url.includes(".jpg")){
			return fs.readFile(`.${request.url}`, function(errors, contents){
		        response.writeHead(200, {'Content-type': 'image/jpg'});
		        response.write(contents);
		        response.end();
		    });
	    }
		else if( request.url.includes(".png")){
			return fs.readFile(`.${request.url}`, function(errors, contents){
		        response.writeHead(200, {'Content-type': 'image/png'});
		        response.write(contents);
		        response.end();
		    });
	    }
		else if( request.url.includes(".gif")){
			return fs.readFile(`.${request.url}`, function(errors, contents){
		        response.writeHead(200, {'Content-type': 'image/gif'});
		        response.write(contents);
		        response.end();
		    });
	    }

	    else{
	    	return fs.readFile(`./views${request.url}.html`, 'utf8', function (errors, contents){
			        response.writeHead(200, {'Content-type': 'text/html'});
				    response.write(contents); 
				    response.end();
	    });
		}
}
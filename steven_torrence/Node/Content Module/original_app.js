//http server
const http = require('http');
const fs = require('fs');
//creating a server
server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' });
    console.log('Request', request.url);
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/dojo.html') {
        fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheet/style.css') {
        fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } else {
        response.end('File not found!!!');
    }
});
server.listen(8000);
console.log("Running in localhost at port 8000");
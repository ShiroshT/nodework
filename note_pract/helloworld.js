var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'content-Type':'text/plain'});
	res.write ("Hello world");
	res.end();
    }).listen(8124);

console.log('Listening on port 3000');
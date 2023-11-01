// console.log(`Listening on port http://localhost:${port}/`);


//catServer.js
'use strict';

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/cats') {

    res.setHeader('Content-Type', 'application/json');
    res.end("meow");
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log(`Listening on port http://localhost:${port}/`);
});
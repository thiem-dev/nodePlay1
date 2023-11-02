
// var http   = require('./http');
// var routes = require('./routes');

import http from 'http'
import routes from './routes.js'
import url from 'url' //for parsedURL = url.parse(req.url, true)


var handleRequest = function (req, res) {
  if(routes[req.url] !== undefined) {
    routes[req.url](req, res);
  } else {
    res.end("404, no such route");
  }
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("Listening... on localhost:8000");
});



// url.parse()
// {"protocol":null,"slashes":null,"auth":null,"host":null,"port":null,"hostname":null,"hash":null,"search":null,"query":{},"pathname":"/cats/1","path":"/cats/1","href":"/cats/1"}
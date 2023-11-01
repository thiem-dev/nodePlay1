
// var http   = require('./http');
// var routes = require('./routes');

import http from 'http'
import routes from './routes.js'

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
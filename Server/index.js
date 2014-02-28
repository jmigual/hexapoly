var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/pujar"] = requestHandlers.pujar;
handle["/favicon.ico"] = requestHandlers.iniciar;

server.iniciar(router.route, handle);
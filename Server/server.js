var http = require("http");
var url = require("url");

function iniciar(route, handle) {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname
		console.log("Request for " + pathname + " received.");

		route(handle, pathnamem, response);
		response.write(content);
	  	response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Servidor iniciat");
}

exports.iniciar = iniciar;
var http = require("http");

function iniciar() {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname
		console.log("Petició per " + pathname + " rebuda.");
		response.writeHead(200, { "Content-Type": "text/html"});
		response.write("Hola Mundo");
	  	response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Servidor iniciat");
}

exports.iniciar = iniciar;
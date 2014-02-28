var exec = require("child_process").exec;

function iniciar(response) {
	console.log("Manipulador de petició 'iniciar' ha estat cridat.");
	exec("ls -lah", function (error, stdout, stderror) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(stdout);
		response.end();
	});
}

function pujar(response) {
	console.log("Manipulador de petició 'pujar' ha estat cridat.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hola pujar");
	response.end;
}

exports.iniciar = iniciar;
exports.pujar = pujar;
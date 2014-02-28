function route(handle, pathname, response) {
	console.log("A punt de rutejar una petició per " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	}
	else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end;
	}
}

exports.route = route;
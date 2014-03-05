function resizeCanvas() {
	var canvas = document.getElementById('canv');
	var size = $('#canvas_container').width();
	if (size != canvas.width) {
		canvas.width = size;
	}
	size = $('#canvas_container').height();
	if (size != canvas.height) {
		canvas.height = size;
	}
}

function draw() {
	resizeCanvas();
	var canvas = document.getElementById('canv');
	var ctx = canvas.getContext('2d');
	var tauler = document.getElementById('pict');
	ctx.drawImage(pict, 0,0, canvas.width, canvas.height);
}
function resizeCanvas(canvas, width, height) {
	if (width != canvas.width) {
		canvas.width = width;
	}
	if (height != canvas.height) {
		canvas.height = height;
	}
}

var paint = setInterval(function draw() {
	var canvas = document.getElementById('canv');
	var ctx = canvas.getContext('2d');
	width = $('#canvas_container').width();
	height = $('#canvas_container').height();
	console.log($('#canvas_container').width(), height);
	resizeCanvas(canvas, width, height);
	var tauler = document.getElementById('pict');
	ctx.drawImage(pict, 0,0, width, height);
}, 1000/5);
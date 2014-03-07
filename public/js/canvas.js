function resizeCanvas(canvas, width, height) {
	if (width != canvas.width) {
		canvas.width = width;
	}
	if (height != canvas.height) {
		canvas.height = height;
	}
}
var i = 0;
function draw() {
	console.log(i++);
	var canvas = document.getElementById('canv');
	var ctx = canvas.getContext('2d');
	var width = $('#canvas_container').width();
	var height = $('#canvas_container').height() - 2;
	resizeCanvas(canvas, width, height);
	var tauler = document.getElementById('pict');
	ctx.drawImage(pict, 0,0, width, height);
}
window.onresize = function() {draw()};
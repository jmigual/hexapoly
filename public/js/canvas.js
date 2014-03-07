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
	var imgW = tauler.naturalWidth;
	var imgH = tauler.naturalHeight;
	//Per saber les proporcions, creem la recta height = konst*width
	var konst = imgH/imgW;
	//Si 'konst' < 1 vol dir que la imatge es horitzontal
	console.log("Width and height");
	console.log(width, height);
	console.log(konst*width);
	if (height >= konst*width) {
		imgW = width;
		imgH = konst*width;
	}
	else {
		imgW = height/konst;
		imgH = height;
	}
	var imgX = width/2 - imgW/2;
	var imgY = height/2 - imgH/2;
	ctx.drawImage(pict, imgX, imgY, imgW, imgH);
}
window.onresize = function() {draw()};
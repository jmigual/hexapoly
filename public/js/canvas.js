/*	Funcionalitat per a requestAnimationFrame */

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());



/*	ANIMACIÓ
_______________________________________________________________________ */

/*	Pre: esta iniciat el canvas, tenim l'amplada i alçada que volem que
	sigui la definitiva */
/*	Post: canvia la mida del canvas perque tingui la especificda*/
function resizeCanvas(canvas, width, height) {
	if (width != canvas.width) {
		canvas.width = width;
	}
	if (height != canvas.height) {
		canvas.height = height;
	}
}

/*	Pre: img es un objecte imatge amb mides determinades, height i width
	son les alçades del canvas */
/*	Post: retorna les dades necessaries per pintar la imatge al centre */
/*
function centerImg(img, height, width, ctx, imgX, imgY, imgW, imgH) {
	imgW = img.naturalWidth;
	imgH = img.naturalHeight;
	//Per saber les proporcions, creem la recta height = konst*width
	var konst = imgH/imgW;
	//Comprovem la posicio de la imatge en relaico a l'amplada i l'altura
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
	
}
*/

/*	Pre: tenim un tauler disponible per dibuixar, que esta pintat a sota */
/*	Post: dibuixa la posicio de cada jugador */
/*function drawPlayer(ctx, height, width) {

	for (var i = 0; i < njugadors; ++i) {
		if (jugadors[i].pos != "ARRUINAT") {

		}
	}
}
*/

function drawHex(ctx, height, width) {
	var konst = 2/Math.sqrt(5);
	var hexW, hexH;
	if (height >= konst*width) {
		hexW = width;
		hexH = konst*width;
	}
	else {
		hexW = height/konst;
		hexH = height;
	}




	ctx.fillStyle = '#f00';

	//Dibuixa el rectangle on esta contingut l'hexagon	
	ctx.beginPath();
	ctx.moveTo(width/2 - hexW/2, height/2 - hexH/2);
	ctx.lineTo(width/2 + hexW/2, height/2 - hexH/2);
	ctx.lineTo(width/2 + hexW/2, height/2 + hexH/2);
	ctx.lineTo(width/2 - hexW/2, height/2 + hexH/2);
	ctx.lineTo(width/2 - hexW/2, height/2 - hexH/2);
	ctx.lineJoin = 'round';
	ctx.stroke();

	//Dibuixa l'hexagon
	ctx.beginPath();
	ctx.moveTo(width/2 - hexH/4, height/2 - hexH/2);
	ctx.lineTo(width/2 + hexH/4, height/2 - hexH/2);
	ctx.lineTo(width/2 + hexW/2, height/2);
	ctx.lineTo(width/2 + hexH/4, height/2 + hexH/2);
	ctx.lineTo(width/2 - hexH/4, height/2 + hexH/2);
	ctx.lineTo(width/2 - hexW/2, height/2);
	ctx.lineTo(width/2 - hexH/4, height/2 - hexH/2);
	ctx.lineJoin = 'round';
	ctx.stroke();
}

var contDraw;

/*	Pre: cert */
/*	Post: dibuixa el tauler de l'hexapoly i els seus jugadors */
function draw() {
	var canvas = document.getElementById('canv');
	var ctx = canvas.getContext('2d');

	//Donem tamany al canvas
	var width = $('#canvas_container').width();
	var height = $('#canvas_container').height() - 4;
	resizeCanvas(canvas, width, height);

	//Borrem el que hi havia per tornar a dibuixar-ho
	ctx.clearRect(0,0, width, height);

	//Dibuixem
	contDraw = false;

	drawHex(ctx, height, width);
	//Variables per dibuixar el tauler
	//var tauler = document.getElementById('pict');
	//var imgX, imgY, imgW, imgH;

	//centerImg(tauler, height, width, ctx, imgX, imgY, imgW, imgH);
	//ctx.drawImage(tauler, imgX, imgY, imgW, imgH);
	//drawPlayer(ctx, height, width, imgW, imgH);

	//Per fer una animacio
	requestAnimationFrame(function() {
		if (contDraw) draw();
	});
}
window.onresize = function() {draw()};
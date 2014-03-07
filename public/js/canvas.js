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
/*	Post: pinta la imatge centrada i a escala*/
function centerImg(img, height, width, ctx) {
	var imgW = img.naturalWidth;
	var imgH = img.naturalHeight;
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
	ctx.drawImage(img, imgX, imgY, imgW, imgH);
}

/*	Pre: cert */
/*	Post: dibuixa el tauler de l'hexapoly i els seus jugadors */
function draw() {

	var canvas = document.getElementById('canv');
	var ctx = canvas.getContext('2d');
	var width = $('#canvas_container').width();
	var height = $('#canvas_container').height() - 2;
	resizeCanvas(canvas, width, height);

	var tauler = document.getElementById('pict');
	centerImg(tauler, height, width, ctx);
}
window.onresize = function() {draw()};
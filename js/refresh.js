function refreshpos(jugador){
	document.getElementById("Pos" + jugador).innerHTML = jugadors[jugador].pos;
}

function refreshmon(jugador){
	document.getElementById("Mon" + jugador).innerHTML = Math.max (jugadors[jugador].mon.toFixed(2), 0);
}

function refreshproperties(jugador){
	var string = '';
	for (var j = 0; j < jugadors[jugador].graus.length; ++j){
		string += jugadors[jugador].graus[j].lloc + '(' + jugadors[jugador].graus[j].lvl + '), ';
	}
	document.getElementById("Graus" + jugador).innerHTML = string;
	string = '';
	for (var j = 0; j < jugadors[jugador].unis.length; ++j){
		string += jugadors[jugador].unis[j] + ', ';
	}
	document.getElementById("Unis" + jugador).innerHTML = string;
	string = '';
	for (var j = 0; j < jugadors[jugador].daus.length; ++j){
		string += jugadors[jugador].daus[j] + ', ';
	}
	document.getElementById("Daus" + jugador).innerHTML = string;
}

// Pre: cert
// Post: actualitza l'array own del jugador
function actualitzapropietats(jugador){
	jugadors[jugador].graus = new Array(0);
	for (var i=1; i<ncaselles; i+=2) {
		if (tauler[i].propietari == jugador){
			jugadors[jugador].graus.push({lloc: i, lvl: tauler[i].level});
		}
	}
	jugadors[jugador].unis = new Array(0);
	for (var i=4; i<ncaselles; i+=8) {
		if (tauler[i].propietari == jugador){
			jugadors[jugador].unis.push(i);
		}
	}
	jugadors[jugador].daus = new Array(0);
	for (var i=14; i<35; i+=20) {
		if (tauler[i].propietari == jugador){
			jugadors[jugador].daus.push(i);
		}
	}
	refreshproperties(jugador);
}

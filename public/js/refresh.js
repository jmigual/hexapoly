function refreshpos(jugador){
	$("#Pos" + jugador).text(jugadors[jugador].pos);
}

function refreshmon(jugador){
	$("#Mon" + jugador).text(Math.max (jugadors[jugador].mon.toFixed(2), 0));
}

function refreshproperties(jugador){
	var string = '';
	for (var j = 0; j < jugadors[jugador].graus.length; ++j){
		string += jugadors[jugador].graus[j].lloc + '(' + jugadors[jugador].graus[j].lvl + '), ';
	}
	$("#Graus" + jugador).text(string);
	string = '';
	for (var j = 0; j < jugadors[jugador].unis.length; ++j){
		string += jugadors[jugador].unis[j] + ', ';
	}
	$("#Unis" + jugador).text(string);
	string = '';
	for (var j = 0; j < jugadors[jugador].daus.length; ++j){
		string += jugadors[jugador].daus[j] + ', ';
	}
	$("#Daus" + jugador).text(string);
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

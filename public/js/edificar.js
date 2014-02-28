// Pre: a, b, c, i d son 4 caselles ordenades en ordre creixent
// Post: retorna la casella en nivell minim i, en cas d'empat, la casella mes petita
function minim(a, b, c, d){
	if (tauler[a].level <= tauler[b].level){
		if (tauler[a].level <= tauler[c].level){
			if (tauler[a].level <= tauler[d].level) return a;
			else return d;
		} else {
			if (tauler[c].level <= tauler[d].level) return c;
			else return d;
		}
	} else {
		if (tauler[b].level <= tauler[c].level){
			if (tauler[b].level <= tauler[d].level) return b;
			else return d;
		} else {
			if (tauler[c].level <= tauler[d].level) return c;
			else return d;
		}
	}
	return "error"; // impossible
}

// Pre: i es multiple de 4; 0 <= i < ncaselles; tauler[i+1].preuedif == tauler[i+3].preuedif
// Post: edifica a les caselles i+1,i+3 si son del jugador i si volsedificar[jugador](casella) fins al nivell 2
//       retorna true si s'ha edificat
function edif2(jugador, i){
	if (tauler[i+3].level < 2 && jugadors[jugador].mon >= tauler[i+1].preuedif){
		if (tauler[i+1].level <= tauler[i+3].level) var e = i+1;
		else var e = i+3;
		if (volsedificar[jugador](e)){
			incrementa(- tauler[i+1].preuedif, jugador);
			tauler[e].level++;
			edif2(jugador,i);
			return true;
		}
	}
}

// Pre: i es multiple d 8; 0 <= i < ncaselles; tauler[i+1].preuedif == ... == tauler[i+7].preuedif
// Post: edifica a les caselles i+1,...,i+7 si son del jugador i si volsedificar[jugador](casella)
//		 retorna true si s'ha edificat
function edif4(jugador, i){
	if (tauler[i+7].level < 5 && jugadors[jugador].mon >= tauler[i+1].preuedif){
		var e = minim(i+1, i+3, i+5, i+7);
		if (volsedificar[jugador](e)){
			incrementa(- tauler[i+1].preuedif, jugador);
			tauler[e].level++;
			edif4(jugador,i);
			return true;
		}
	}
}

// Pre: cert
// Post: edifica a les caselles del jugador on es pot si volsedificar[jugador](casella)
function edificar(jugador){
	var b = false;
	var bb;
	for (var i=0; i<ncaselles; i+=8) {
		var has1sts = tauler[i+1].propietari == jugador && tauler[i+3].propietari == jugador;
		var has2nds = tauler[i+5].propietari == jugador && tauler[i+7].propietari == jugador;
		if (has1sts) bb = edif2(jugador, i);
		if (!b) b = bb;
		if (has2nds) bb = edif2(jugador, i+4);
		if (!b) b = bb;
		if (has1sts && has2nds) bb = edif4(jugador, i);
		if (!b) b = bb;
	}
	if (b) actualitzapropietats(jugador);
} 
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
			jugadors[jugador].daus.push(i);		}
	}
}

//************ pendent d'acabar d modificar -- Arnau
/*
function casellasedificables(jugador, i){
	if (tauler[i+1].propietari == jugador && tauler[i+3].propietari == jugador &&
		&& tauler[i+1].level <= 2 && tauler[i+1].preuedif >= jugadors[jugador].mon){
		if (volsedificar[jugador]() //casella i+1 // && tauler[i+1].level == tauler[i+3].level){
			
		}
	}
	*/
// falta acabar
/*	if (tauler[a].propietari == jugador && tauler[b].propietari == jugador
		&& tauler[c].propietari == jugador && tauler[c].level < 5
		&& preuhotel(c) <= jugadors[jugador].mon){
		var edificable = a;
		if (tauler[b].level < tauler[a].level) edificable = b;
		if (tauler[c].level < tauler[b].level) edificable = c;
		if (confirm("Jugador " + jugador + ". Vols edificar a la casella " + edificable + "? Preu: " + preuhotel(c))) {
			jugadors[jugador].mon -= preuhotel(c);
			tauler[edificable].level++;
			casellasedificables(jugador,a,b,c);
		}
	}
}*/

/*

function edificar(jugador){
	for (var i=0; i<6; ++i) casellesedificables(jugador, i);
} */

// Construeix edificis si es pot i volsedificar[jugador]
function edificar(jugador){
	var shaedificat = false;
	// Edificacio 1r edifici
	for (var i = 1; i < ncaselles; i += 4){
		if (tauler[i].propietari == jugador && tauler[i+2].propietari == jugador) {
			if (tauler[i].level == 0 && jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60
				&& volsedificar[jugador]()) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i].level;
				shaedificat = true;
			}
			if (tauler[i+2].level == 0 && jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60
				&& volsedificar[jugador]()) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+2].level;
				shaedificat = true;
			}
		}
	}
	// Edificacio resta d'edificis
	for (var i = 1; i < ncaselles; i += 8){
		if (tauler[i].propietari == jugador && tauler[i+2].propietari == jugador &&
			tauler[i+4].propietari == jugador && tauler[i+6].propietari == jugador) {
			if (tauler[i].level >= 1 && tauler[i].level < 5 &&
				jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i].level;
				shaedificat = true;
			}
			if (tauler[i+2].level >= 1 && tauler[i+2].level < 5 &&
				jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+2].level;
				shaedificat = true;
			}
			if (tauler[i+4].level >= 1 && tauler[i+4].level < 5 &&
				jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+4].level;
				shaedificat = true;
			}
			if (tauler[i+6].level >= 1 && tauler[i+6].level < 5 &&
				jugadors[jugador].mon >= (Math.floor(i/16) + 1)*60 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+6].level;
				shaedificat = true;
			}
		}
	}
	if (shaedificat) actualitzapropietats(jugador);
}
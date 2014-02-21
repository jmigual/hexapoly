

var jugadors = new Array();

// Pre: existeix un array de jugadors
// Post: crea tants jugadors com njguadors amb totes les seves característiques
function create() {
	for (var i = 0; i <= njugadors; ++i) {
		jugadors.push({pos: 0, mon: 600, jail: false, 
		missturns: 0, graus: new Array(), unis: new Array(), 
		daus: new Array()});
	}
}





// Pre: es un jugador viu, sabem si esta o no a la presó
// Post: Tira els daus, mou el jugador i avisa si hi ha dobles
function newpos (jugador){
	d1 = Math.floor((Math.random()*6)+1);
	d2 = Math.floor((Math.random()*6)+1);
	daus = d1 + d2;
	if (d1 == d2) dobles = true;
	else dobles = false;

	//Si estas a la presó i no treus dobles no et mous, si treus
	if (!jugadors[jugador].jail || dobles){
		jugadors[jugador].pos += daus;
		jugadors[jugador].jail = false;
	}

	//Mira si fa una volta 
	if (jugadors[jugador].pos >= ncaselles){
		jugadors[jugador].pos -= ncaselles;
		jugadors[jugador].mon += 60;
	}
}



// Pre: jugadors[jugador].mon < 0
// Post: Totes les propietats del jugador "jugador" passen a ser del jugador 0
function bancarrota(jugador){
	for (var i = 0; i < ncaselles; ++i){
		if (tauler[i].propietari == jugador) {
			tauler[i].propietari = 0;
			tauler[i].level = 0;
		}
	}
	actualitzapropietats(jugador);
}

// Suma una quantitat de diners a un jugador
function incrementa(quantitat, jugador){
	jugadors[jugador].mon = jugadors[jugador].mon + quantitat;
	if (jugadors[jugador].mon < 0) bancarrota(jugador);
}

// El jugador2 paga una quantitat de diners al jugador1
function transferencia(quantitat, jugador1, jugador2){
	incrementa(0.79*quantitat, jugador1);
	incrementa(-quantitat, jugador2);
	iva += 0.21*quantitat;
}

// Retorna la taxa a pagar en una casella de uni
function taxauni(owner){
	var i = 12.5;
	for (var j = 4; j < 45; j += 8) if (tauler[j].propietari == owner) i *= 2;
	return i;
}

// Retorna la taxa a multiplicar pel num dels daus en una casella de daus
function taxadaus(){
	if (tauler[14].propietari == tauler[34].propietari) return 10;
	return 4;
}

// accions caselles festes i examens, de moment moviments random endavant o enrere
function festes(jugador){
	jugadors[jugador].pos += Math.floor(Math.random()*11-5);
	tipuscasella(jugador);
}
function examens(jugador){ festes(jugador);}

// Accio especial segons la casella on ha caigut el jugador
function tipuscasella(jugador){
	var casella = jugadors[jugador].pos;
	//casella normal
	if (tauler[casella].tipus == 'grau' || tauler[casella].tipus == 'uni' || tauler[casella].tipus == 'daus'){
		if (tauler[casella].propietari == 0 ){
			// Possibilitat de comprar
			if ((jugadors[jugador].mon >= tauler[casella].preu) && volscomprar[jugador]()) {
				incrementa (- tauler[casella].preu,jugador);
				tauler[casella].propietari = jugador;
				actualitzapropietats(jugador);
			}
		}
		else if (tauler[casella].propietari == jugador){
			// Res
		} else {
			// Has de pagar a un altre jugador
			if (tauler[casella].tipus == 'uni') {
				transferencia(taxauni(tauler[casella].propietari),
					tauler[casella].propietari, jugador);
			} else if (tauler[casella].tipus == 'daus') {
				transferencia(taxadaus()*daus,
					tauler[casella].propietari, jugador);
			} else {
				transferencia(tauler[casella].taxa[tauler[casella].level],
					tauler[casella].propietari, jugador);
			}
		}
	}
	else if (tauler[casella].tipus == 'festes') festes(jugador);	
	else if (tauler[casella].tipus == 'examens') examens(jugador);
	else if (tauler[casella].tipus == 'impostos'){
		if (casella == 2) incrementa(-200, jugador);
		else incrementa(-100, jugador);
	}
	else if (tauler[casella].nom == 'Any sabàtic') jugadors[jugador].missturns = 1;
	else if (tauler[casella].nom == 'Aeroport') {
		jugadors[jugador].pos = Math.floor((Math.random()*ncaselles));
		if (jugadors[jugador].pos < 24) jugadors[jugador].mon += 200;
		tipuscasella(jugador);
	}
	else if (tauler[casella].nom == 'Corrupció') {
		jugadors[jugador].mon += iva;
		iva = 0;
	}
	else if (tauler[casella].nom == 'Vés a la presó'){
			jugadors[jugador].pos = 10;
			jugadors[jugador].jail == true;
	}
}




//************
//Actualitzar els marcadors
function refresh(){
	for (var i = 1; i <= njugadors; ++i){
		document.getElementById("Pos" + i).innerHTML = jugadors[i].pos;
		document.getElementById("Mon" + i).innerHTML = Math.max (jugadors[i].mon.toFixed(2), 0);
		var string;
		string = '';
		for (var j = 0; j < jugadors[i].graus.length; ++j){
			string += jugadors[i].graus[j].lloc + '(' + jugadors[i].graus[j].lvl + '), ';
		}
		document.getElementById("Graus" + i).innerHTML = string;
		string = '';
		for (var j = 0; j < jugadors[i].unis.length; ++j){
			string += jugadors[i].unis[j] + ', ';
		}
		document.getElementById("Unis" + i).innerHTML = string;
		string = '';
		for (var j = 0; j < jugadors[i].daus.length; ++j){
			string += jugadors[i].daus[j] + ', ';
		}
		document.getElementById("Daus" + i).innerHTML = string;
	}
}

//************
//Funcio que retorna el torn seguent o 0 si s'ha acabat la partida
function nexturn(ActualPlayer, dobles){
	if (dobles && jugadors[ActualPlayer].mon >= 0) return ActualPlayer;
	var next = (ActualPlayer)%njugadors + 1;
	if (jugadors[next].mon < 0) next = nexturn(next, false);
	if (next == ActualPlayer) finish = true;
	return next;
}

/**************
// Pre: partida acabada. Post: retorna jugador guanyador
function winner(){
	var guanyadors = 0;
	var guanyador;
	for (var i = 1; i <= njugadors; ++i) {
		if (jugadors[i].mon >= 0) {
			++guanyadors;
			guanyador = i;
		}
	}
	if (guanyadors == 1) return guanyador;
	else return 'Arnau Canyadell';
}*/

//
// codi principal
//
var ActualPlayer;
var iva;
var daus; // int, valor suma dels dos daus tirats
var dobles; // bool
var finish;

function monopoly(){
	//Cridem a la funció per crear els jugadors de la partida
	create();
	//Inicialitzem variables globals
	ActualPlayer = Math.floor((Math.random()*njugadors)+1);
	iva = 21;
	finish = false;
	var a = setInterval(function(){
		newpos(ActualPlayer);
		refresh();
		tipuscasella(ActualPlayer);
		edificar(ActualPlayer);
		ActualPlayer = nexturn(ActualPlayer, dobles);
		if (finish){
			alert('El jugador ' + ActualPlayer + ' guanya!! Losers cry');
			clearInterval(a);
		}
	}, 2000);
}

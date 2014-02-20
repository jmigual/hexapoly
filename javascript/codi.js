// Num. jugadors i caselles
var njugadors;
var ncaselles = 48;

function numero() {
	var number = document.forms[0].number;
	var txt = "";
	var alertar = true;
	for (var i = 0; i < number.length ; ++i) {
		if (number[i].checked) {
	    	txt = txt + number[i].value;
	    	njugadors = parseInt(number[i].value);	    	
	    	txt = "Sou " + txt + " jugadors" + '<br><br><table border=2><tr>';
 	    	for (var i = 1; i <= njugadors; ++i)  {
 	    		txt += '<td><h1>Jugador ' + i + '</h1><br>Posicio:<div id="Pos' + i + '"">0</div>';
 	    		txt += 'Diners:<div id="Mon' + i + '"">2000</div>';
 	    		txt += '<br>Graus(nivell): <div id=Graus' + i +'></div>';
 	    		txt += '<br>Unis: <div id=Unis' + i +'></div>';
 	    		txt += '<br>Companyies de ferrocarrils: <div id=Daus' + i +'></div>';
 	    		txt += '</td>';
 	    	}
 	    	txt += '</tr></table>';
 	    	document.getElementById('jugadors').innerHTML = txt;
 	    	
	    	monopoly();
	    	alertar = false;
		}
	}
	if (alertar) alert("Has de seleccionar el nombre de jugadors!!!");
}

//******************************************
function monopoly(){

var jugadors = new Array();
for (var i = 0; i <= njugadors; ++i) {
	jugadors.push({pos: 0, mon: 600, jail: false, 
	missturns: 0, graus: new Array(), unis: new Array(), 
	daus: new Array()});
}

// actualitza l'array own del jugador
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

// Declara tauler
function Casella(tipus, propietari, nom, preu, normal, ucasa, dcasa, tcasa, qcasa, hotel, level) {
    this.tipus = tipus;
	this.propietari = propietari;
    this.nom = nom;
	this.preu = preu;
	this.taxa = new Array();
	this.taxa[0] = normal;
	this.taxa[1] = ucasa;
	this.taxa[2] = dcasa;
	this.taxa[3] = tcasa;
	this.taxa[4] = qcasa;
	this.taxa[5] = hotel;
	this.level = level;
}

var tauler = new Array();
tauler[0] = new Casella('especial',0,'Sortida',0,0,0,0,0,0,0,0);
tauler[1] = new Casella('grau',0,'Magisteri',10,4,8,16,32,64,128,0);
tauler[2] = new Casella('impostos',0,'Taxa universitària',0,0,0,0,0,0,0,0);
tauler[3] = new Casella('grau',0,'Belles arts',12,5,10,20,40,80,160,0);
tauler[4] = new Casella('uni',0,'UPF',30,0,0,0,0,0,0,0);
tauler[5] = new Casella('grau',0,'Sociologia',14,7,14,28,56,112,224,0);
tauler[6] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[7] = new Casella('grau',0,'Psicologia',16,7,14,28,56,112,224,0);
tauler[8] = new Casella('especial',0,'Any sabàtic',0,0,0,0,0,0,0,0);
tauler[9] = new Casella('grau',0,'Filologia',120,12,120,240,360,480,600,0);
tauler[10] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[11] = new Casella('grau',0,'Filosofia',120,12,120,240,360,480,600,0);
tauler[12] = new Casella('uni',0,'UB',200,0,0,0,0,0,0,0);
tauler[13] = new Casella('grau',0,'Arqueologia',140,14,140,280,420,560,700,0);
tauler[14] = new Casella('daus',0,'Ferrocarrils de la Generalitat',0,0,0,0,0,0,0,0);
tauler[15] = new Casella('grau',0,'Història',140,14,140,280,420,560,700,0);
tauler[16] = new Casella('especial',0,'Presó (només visites)',0,0,0,0,0,0,0,0);
tauler[17] = new Casella('grau',0,'Enginyeria en telecomunicacions',160,16,160,320,480,640,800,0);
tauler[18] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[19] = new Casella('grau',0,'Enginyeria informàtica',170,17,170,340,510,680,850,0);
tauler[20] = new Casella('uni',0,'UAB',200,0,0,0,0,0,0,0);
tauler[21] = new Casella('grau',0,'Enginyeria industrial',180,18,180,360,540,720,900,0);
tauler[22] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[23] = new Casella('grau',0,'Enginyeria aeronàutica',190,19,190,380,570,760,950,0);
tauler[24] = new Casella('especial',0,'Aeroport',0,0,0,0,0,0,0,0);
tauler[25] = new Casella('grau',0,'Dret',211,21,211,422,633,844,1055,0);
tauler[26] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[27] = new Casella('grau',0,'Periodisme',222,22,222,444,666,888,1110,0);
tauler[28] = new Casella('uni',0,'URV',200,0,0,0,0,0,0,0);
tauler[29] = new Casella('grau',0,'ADE',233,23,233,466,699,932,1165,0);
tauler[30] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[31] = new Casella('grau',0,'Economia',245,24,245,490,735,980,1225,0);
tauler[32] = new Casella('especial',0,'Corrupció',0,0,0,0,0,0,0,0);
tauler[33] = new Casella('grau',0,'Geologia',250,25,250,500,750,1000,1250,0);
tauler[34] = new Casella('daus',0,'RENFE',0,0,0,0,0,0,0,0);
tauler[35] = new Casella('grau',0,'Química',270,27,270,540,810,1080,1350,0);
tauler[36] = new Casella('uni',0,'UdLl',200,0,0,0,0,0,0,0);
tauler[37] = new Casella('grau',0,'Biologia',280,28,280,560,840,1120,1400,0);
tauler[38] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[39] = new Casella('grau',0,'Medicina',300,30,300,600,900,1200,1500,0);
tauler[40] = new Casella('especial',0,'Vés a la presó',0,0,0,0,0,0,0,0);
tauler[41] = new Casella('grau',0,'Matemàtiques',350,35,350,700,1050,1400,1750,0);
tauler[42] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[43] = new Casella('grau',0,'Física',350,35,350,700,1050,1400,1750,0);
tauler[44] = new Casella('uni',0,'UdG',200,0,0,0,0,0,0,0);
tauler[45] = new Casella('grau',0,'Arquitectura',375,37.5,375,750,1125,1500,1875,0);
tauler[46] = new Casella('impostos',0,'Compra de material',0,0,0,0,0,0,0,0);
tauler[47] = new Casella('grau',0,'Enginyeria interdisciplinària',400,40,400,800,1200,1600,2000,0);

//************
//Pre: es un jugador viu, sabem si esta o no a la presó
//Post: Tira els daus, mou el jugador i avisa si hi ha dobles
function newpos (jugador){
	d1 = Math.floor((Math.random()*6)+1);
	d2 = Math.floor((Math.random()*6)+1);
	daus = d1 + d2;
	if (d1 == d2) dobles = true;
	else dobles = false;
	//Si treus dobles surts de la presó, si no com que ja no estàs a la presó se't suma
	//la posició igualment
	if (!jugadors[jugador].jail || dobles){
		jugadors[jugador].pos += daus;
		jugadors[jugador].jail = false;
	}
	if (jugadors[jugador].pos >= ncaselles){
		jugadors[jugador].pos -= ncaselles;
		jugadors[jugador].mon += 60;
	}
}

//**********
// Intel.ligencies (artificials o no)

//Funcions per les inteligencies per construir
var volsedificar = new Array;
volsedificar[1] = function () { return true };
volsedificar[2] = function () { return true };
volsedificar[3] = function () { return true };
volsedificar[4] = function () { return true };
volsedificar[5] = function () { return true };
volsedificar[6] = function () { return true };


//Funcions per les inteligencies artificials per comprar
var volscomprar = new Array;
volscomprar[1] = function () { return confirm('Vols comprar la casella ' + 
	jugadors[1].pos + ' per ' + tauler[jugadors[1].pos].preu + '?') };
volscomprar[2] = function () { return true };
volscomprar[3] = function () { return true };
volscomprar[4] = function () { return true };
volscomprar[5] = function () { return true };
volscomprar[6] = function () { return true };

//***********
//Pre: jugadors[jugador].mon < 0
//Post: Totes les propietats del jugador "jugador" passen a ser del jugador 0
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

function edificar(jugador){
	for (var i=0; i<6; ++i) casellesedificables(jugador, i);
}
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

//************
//Actualitzar els marcadors
function refresh(){
	for (var i = 1; i <= njugadors; i++){
		document.getElementById("Pos" + i).innerHTML = jugadors[i].pos;
		document.getElementById("Mon" + i).innerHTML = jugadors[i].mon;
		var string;
		string = '';
		for (var j = 0; j < jugadors[i].graus.length; j++){
			string += jugadors[i].graus[j].lloc + '(' + jugadors[i].graus[j].lvl + '), ';
		}
		document.getElementById("Graus" + i).innerHTML = string;
		string = '';
		for (var j = 0; j < jugadors[i].unis.length; j++){
			string += jugadors[i].unis[j] + ', ';
		}
		document.getElementById("Unis" + i).innerHTML = string;
		string = '';
		for (var j = 0; j < jugadors[i].daus.length; j++){
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
var ActualPlayer = Math.floor((Math.random()*njugadors)+1);
var iva = 0;
var daus; // int, valor suma dels dos daus tirats
var dobles; // bool
var finish = false;

var a = setInterval(function(){
	newpos(ActualPlayer);
	tipuscasella(ActualPlayer);
	edificar(ActualPlayer);
	refresh();
	ActualPlayer = nexturn(ActualPlayer, dobles);
	if (finish){
		alert('El jugador ' + ActualPlayer + ' guanya!! Losers cry');
		clearInterval(a);
	}
}, 1000);
}

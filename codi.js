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
 	    		txt += '<br>Cases(nivell):<div id=Cases' + i +'></div>'
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
for (var i = 0; i <= njugadors; ++i) jugadors.push({pos: 0, mon: 2000, own: new Array(), jail: false});

// actualitza l'array own del jugador
function actualitzapropietats(jugador){
	jugadors[jugador].own = new Array();
	for (var i = 0; i < 48; ++i) {
		if (tauler[i].propietari == jugador){
			jugadors[jugador].own.push({lloc: i, lvl: tauler[i].level})
		}
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
tauler[1] = new Casella('grau',0,'Magisteri',60,0,0,0,0,0,0,0);
tauler[2] = new Casella('impostos',0,'Taxa universitària',0,0,0,0,0,0,0,0);
tauler[3] = new Casella('grau',0,'Belles arts',70,0,0,0,0,0,0,0);
tauler[4] = new Casella('uni',0,'UPF',200,0,0,0,0,0,0,0);
tauler[5] = new Casella('grau',0,'Sociologia',90,0,0,0,0,0,0,0);
tauler[6] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[7] = new Casella('grau',0,'Psicologia',100,0,0,0,0,0,0,0);
tauler[8] = new Casella('especial',0,'Any sabàtic',0,0,0,0,0,0,0,0);
tauler[9] = new Casella('grau',0,'Filologia',120,0,0,0,0,0,0,0);
tauler[10] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[11] = new Casella('grau',0,'Filosofia',120,0,0,0,0,0,0,0);
tauler[12] = new Casella('uni',0,'UB',200,0,0,0,0,0,0,0);
tauler[13] = new Casella('grau',0,'Arqueologia',140,0,0,0,0,0,0,0);
tauler[14] = new Casella('daus',0,'Ferrocarrils de la Generalitat',0,0,0,0,0,0,0,0);
tauler[15] = new Casella('grau',0,'Història',140,0,0,0,0,0,0,0);
tauler[16] = new Casella('especial',0,'Presó (només visites)',0,0,0,0,0,0,0,0);
tauler[17] = new Casella('grau',0,'Enginyeria en telecomunicacions',160,0,0,0,0,0,0,0);
tauler[18] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[19] = new Casella('grau',0,'Enginyeria informàtica',170,0,0,0,0,0,0,0);
tauler[20] = new Casella('uni',0,'UAB',200,0,0,0,0,0,0,0);
tauler[21] = new Casella('grau',0,'Enginyeria industrial',180,0,0,0,0,0,0,0);
tauler[22] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[23] = new Casella('grau',0,'Enginyeria aeronàutica',190,0,0,0,0,0,0,0);
tauler[24] = new Casella('especial',0,'Aeroport',0,0,0,0,0,0,0,0);
tauler[25] = new Casella('grau',0,'Dret',211,0,0,0,0,0,0,0);
tauler[26] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[27] = new Casella('grau',0,'Periodisme',222,0,0,0,0,0,0,0);
tauler[28] = new Casella('uni',0,'URV',200,0,0,0,0,0,0,0);
tauler[29] = new Casella('grau',0,'ADE',233,0,0,0,0,0,0,0);
tauler[30] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[31] = new Casella('grau',0,'Economia',245,0,0,0,0,0,0,0);
tauler[32] = new Casella('especial',0,'Corrupció',0,0,0,0,0,0,0,0);
tauler[33] = new Casella('grau',0,'Geologia',250,0,0,0,0,0,0,0);
tauler[34] = new Casella('daus',0,'RENFE',0,0,0,0,0,0,0,0);
tauler[35] = new Casella('grau',0,'Química',270,0,0,0,0,0,0,0);
tauler[36] = new Casella('uni',0,'UdLl',200,0,0,0,0,0,0,0);
tauler[37] = new Casella('grau',0,'Biologia',280,0,0,0,0,0,0,0);
tauler[38] = new Casella('festes',0,'Festes',0,0,0,0,0,0,0,0);
tauler[39] = new Casella('grau',0,'Medicina',300,0,0,0,0,0,0,0);
tauler[40] = new Casella('especial',0,'Vés a la presó',0,0,0,0,0,0,0,0);
tauler[41] = new Casella('grau',0,'Matemàtiques',350,0,0,0,0,0,0,0);
tauler[42] = new Casella('examens',0,'Exàmens',0,0,0,0,0,0,0,0);
tauler[43] = new Casella('grau',0,'Física',350,0,0,0,0,0,0,0);
tauler[44] = new Casella('uni',0,'UdG',200,0,0,0,0,0,0,0);
tauler[45] = new Casella('grau',0,'Arquitectura',375,0,0,0,0,0,0,0);
tauler[46] = new Casella('impostos',0,'Compra de material',0,0,0,0,0,0,0,0);
tauler[47] = new Casella('grau',0,'Enginyeria interdisciplinària',400,0,0,0,0,0,0,0);

//************
// Tira els daus, mou el jugador i avisa si hi ha dobles
function newpos (jugador){
	d1 = Math.floor((Math.random()*6)+1);
	d2 = Math.floor((Math.random()*6)+1);
	daus = d1 + d2;
	jugadors[jugador].pos += daus;
	if (jugadors[jugador].pos >= ncaselles){
		jugadors[jugador].pos -= ncaselles;
		jugadors[jugador].mon += 200;
	}
	if (d1 == d2) dobles = true;
	else dobles = false;
}

//**********
// Intel.ligencies (artificials o no)
function volsedificar1(){ return true};
function volsedificar2(){ return true};
function volsedificar3(){ return true};
function volsedificar4(){ return true};
function volsedificar5(){ return true};
function volsedificar6(){ return true};
var volsedificar = new Array();
volsedificar[1] = volsedificar1();
volsedificar[2] = volsedificar2();
volsedificar[3] = volsedificar3();
volsedificar[4] = volsedificar4();
volsedificar[5] = volsedificar5();
volsedificar[6] = volsedificar6();

function volscomprar1(){ return true};
function volscomprar2(){ return true};
function volscomprar3(){ return true};
function volscomprar4(){ return true};
function volscomprar5(){ return true};
function volscomprar6(){ return true};
var volscomprar = new Array();
volscomprar[1] = volscomprar1();
volscomprar[2] = volscomprar2();
volscomprar[3] = volscomprar3();
volscomprar[4] = volscomprar4();
volscomprar[5] = volscomprar5();
volscomprar[6] = volscomprar6();

//***********
// Totes les propietats del jugador "jugador" passen a ser del jugador 0
function bancarrota(jugador){
	for (var i=0; i<40; i++){
		if (tauler[i].propietari == jugador) {
			tauler[i].propietari = 0;
			tauler[i].level = 0;
		}
	}
	jugadors[jugador].own = new Array(0);
}

// Suma una quantitat de diners a un jugador
function incrementa(quantitat, jugador){
	jugadors[jugador].mon = jugadors[jugador].mon + quantitat;
	if (jugadors[jugador].mon < 0) bancarrota(jugador);
}

// El jugador2 paga una quantitat de diners al jugador1
function transferencia(quantitat, jugador1, jugador2){
	incrementa(quantitat, jugador1);
	incrementa(- quantitat, jugador2);
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

// Accio especial segons la casella on ha caigut el jugador
function tipuscasella(casella,jugador){
	//casella normal
	if (tauler[casella].tipus == 'grau' || tauler[casella].tipus == 'uni' || tauler[casella].tipus == 'daus'){
		if (tauler[casella].propietari == 0 ){
			// Possibilitat de comprar
			if ((jugadors[jugador].mon >= tauler[casella].preu) && volscomprar[jugador]) {
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
	else if (tauler[casella].tipus == 'festes'){
	}	
	else if (tauler[casella].tipus == 'examens'){
	}
	else if (tauler[casella].tipus == 'impostos'){
		if (casella == 2) incrementa(-200, jugador);
		else incrementa(-100, jugador);
	}
	else {
			//jugadors[jugador].pos = 10;
	}
}

//************
// Construeix edificis si es pot i volsedificar[jugador]
function edificar(jugador){
	// Edificacio 1r edifici
	for (var i = 1; i < ncaselles; i += 4){
		if (tauler[i].propietari == jugador && tauler[i+2].propietari == jugador) {
			if (tauler[i].level == 0 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i].lvl;
			}
			if (tauler[i+2].level == 0 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+2].lvl;
			}
		}
	}
	// Edificacio resta d'edificis
	for (var i = 1; i < ncaselles; i += 8){
		if (tauler[i].propietari == jugador && tauler[i+2].propietari == jugador &&
			tauler[i+4].propietari == jugador && tauler[i+6].propietari == jugador) {
			if (tauler[i].level > 1 && tauler[i].level < 5 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i].lvl;
			}
			if (tauler[i+2].level > 1 && tauler[i+2].level < 5 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+2].lvl;
			}
			if (tauler[i+4].level > 1 && tauler[i+4].level < 5 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+4].lvl;
			}
			if (tauler[i+6].level > 1 && tauler[i+6].level < 5 && volsedificar[jugador]) {
				incrementa(- (Math.floor(i/16) + 1)*60, jugador);
				++tauler[i+6].lvl;
			}
		}
	}
	actualitzapropietats(jugador);
}

//************
//Actualitzar els marcadors
function refresh(){
	for (var i = 1; i <= njugadors; i++){
		document.getElementById("Pos" + i).innerHTML = jugadors[i].pos;
		document.getElementById("Mon" + i).innerHTML = jugadors[i].mon;
		var string;
		string = '';
		for (var j = 0; j < jugadors[i].own.length; j++){
			string += jugadors[i].own[j].lloc + '(' + jugadors[i].own[j].lvl + '), ';
		}
		document.getElementById("Cases" + i).innerHTML = string;
	}
}

//************
//Funcio que retorna el torn seguent o 0 si s'ha acabat la partida
function nexturn(ActualPlayer, dobles){
	if (dobles) return ActualPlayer;
	var next = (ActualPlayer)%njugadors + 1;
	if (jugadors[next].mon < 0) next = nexturn(next, dobles);
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
var daus; // int, valor suma dels dos daus tirats
var dobles; // bool
var finish = false;

var a = setInterval(function(){
	newpos(ActualPlayer);
	tipuscasella(jugadors[ActualPlayer].pos, ActualPlayer);
	edificar(ActualPlayer);
	refresh();
	ActualPlayer = nexturn(ActualPlayer, dobles);
	if (finish){
		alert('El jugador ' + ActualPlayer + ' guanya!! Losers cry');
		clearInterval(a);
	}
}, 50);
}
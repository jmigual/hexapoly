// Pre: cert
// Post: declara tauler
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

//**********
// Intel.ligencies (artificials o no)

// Funcions per les inteligencies per construir
var volsedificar = new Array;
volsedificar[1] = function () { return true };
volsedificar[2] = function () { return true };
volsedificar[3] = function () { return true };
volsedificar[4] = function () { return true };
volsedificar[5] = function () { return true };
volsedificar[6] = function () { return true };


// Funcions per les inteligencies artificials per comprar
var volscomprar = new Array;
volscomprar[1] = function () { return confirm('Vols comprar la casella ' + 
	jugadors[1].pos + ' per ' + tauler[jugadors[1].pos].preu + '?') };
volscomprar[2] = function () { return true };
volscomprar[3] = function () { return true };
volscomprar[4] = function () { return true };
volscomprar[5] = function () { return true };
volscomprar[6] = function () { return true };
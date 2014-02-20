var ncaselles = 48;
var njugadors;
function numero() {
	// Num. jugadors i caselles

	//********************
	var number = document.forms[0].number;
	var txt;
	var alertar = true;
	for (var i = 0; i < number.length ; ++i) {
		if (number[i].checked) {
	    	txt = number[i].value;
	    	njugadors = parseInt(number[i].value);	    	
	    	txt = "Sou " + txt + " jugadors" + '<br><br><table border=2><tr>';
 	    	for (var i = 1; i <= njugadors; ++i)  {
 	    		txt += '<td><h1>Jugador ' + i + '</h1><br>Posicio:<div id="Pos' + i + '"">0</div>';
 	    		txt += 'Diners:<div id="Mon' + i + '"">600</div>';
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
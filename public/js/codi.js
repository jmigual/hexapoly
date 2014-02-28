function playerNumber() {
	var number = document.forms[0].number;
	var txt = "";
	var alert = true;
	for (var i = 0; i < number.length ; ++i) {
		if (number[i].checked) {
	    	njugadors = parseInt(number[i].value);	    	
 	    	txt += '<br>Nombre de IA: <br><form id="form">'
 	    	for (var i = 1; i <= njugadors; ++i) {
 	    		txt += '<input type=radio name="number" value="' + i + '">' + i + '<br>';
 	    	}
 	    	txt += '<br><input type=button onclick=cpuNumber() value="Confirmar">';
 	    	document.getElementById('col2').innerHTML = txt;
 	    
	    	alert = false;
		}
	}
	if (alert) alert("Has de seleccionar el nombre de jugadors!!!");
}

function cpuNumber() {
	var number = document.forms[0].number;
	var txt;
	var alert = true;
	for (var i = 0; i < number.length; ++i) {
		if (number[i].checked) {
			nCpu = parseInt(number[i].value);

			// Escrivim tots els jugadors
			txt = "Sou " + njugadors + " jugadors" + '<br><br><table border=2><tr>';
			for (var i = 1; i <= njugadors; ++i)  {
 	    		txt += '<td><h1>Jugador ' + i + '</h1><br>Posicio:<div id="Pos' + i + '"">0</div>';
 	    		txt += 'Diners:<div id="Mon' + i + '"">600</div>';
 	    		txt += '<br>Graus(nivell): <div id=Graus' + i +'></div>';
 	    		txt += '<br>Unis: <div id=Unis' + i +'></div>';
 	    		txt += '<br>Companyies de ferrocarrils: <div id=Daus' + i +'></div>';
 	    		txt += '</td>';
 	    	}
 	    	txt += '</tr></table>';
 	    	document.getElementById('col2').innerHTML = txt;
 	    	alert = false;
 	    	document.getElementById('col1').style.display = "block";
 	    	monopoly();
		}
	}
	if (alert) alert("Has de selccionar el nombre de IA!!!");
}
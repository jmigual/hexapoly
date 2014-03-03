function playerNumber() {
	var number = document.forms[0].number;
	var txt = "";
	var alert = true;
	for (var i = 0; i < number.length ; ++i) {
		if (number[i].checked) {
	    	njugadors = parseInt(number[i].value);	    	
 	    	txt += '<br>Nombre de IA: <br><form id="form">'
 	    	for (var i = 0; i <= njugadors; ++i) {
 	    		txt += '<input type=radio name="number" value="' + i + '"';
 	    		if (i == njugadors) txt += "checked='checked'";
 	    		txt +='>' + i + '<br>';
 	    	}
 	    	txt += '<br><button type=button onclick=cpuNumber()>Confirmar</button>';
 	    	$('#col2').html(txt);
 	    
	    	alert = false;
		}
	}
	if (alert) alert("Has de seleccionar el nombre de jugadors!!!");
}

function cpuNumber() {
	var number = document.forms[0].number;
	var txt = "";
	var alert = true;
	for (var i = 0; i < number.length; ++i) {
		if (number[i].checked) {
			nCpu = parseInt(number[i].value);

			txt = "Sou " + njugadors + " jugadors" + '<br><br><table class="tab"><tr>';
			//Si el nombre de jugadors es major que 3 escriurem dues files
			if (njugadors > 3) {
				for (var i = 1; i <= 3; ++i) {
					txt += '<td><h1>Jugador ' + i + '</h1>';
					txt += '<br><div class="etiq">Posicio:</div><div id="Pos' + i + '"">0</div>';
	 	    		txt += '<div class="etiq">Diners:</div><div id="Mon' + i + '"">600</div>';
	 	    		txt += '<div class="etiq">Graus(nivell): </div> <div id=Graus' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Unis: </div><div id=Unis' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Companyies de ferrocarrils: </div><div id=Daus' + i +'>Cap</div>';
	 	    		txt += '</td>';
				}
				txt += "</tr><tr>";
				for (var i = 4; i <= njugadors; ++i) {
					txt += '<td><h1>Jugador ' + i + '</h1>';
					txt += '<br><div class="etiq">Posicio:</div><div id="Pos' + i + '"">0</div>';
	 	    		txt += '<div class="etiq">Diners:</div><div id="Mon' + i + '"">600</div>';
	 	    		txt += '<div class="etiq">Graus(nivell): </div> <div id=Graus' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Unis: </div><div id=Unis' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Companyies de ferrocarrils: </div><div id=Daus' + i +'>Cap</div>';
	 	    		txt += '</td>';
				}
			}
			else {
				for (var i = 1; i <= njugadors; ++i) {
					txt += '<td><h1>Jugador ' + i + '</h1>';
					txt += '<br><div class="etiq">Posicio:</div><div id="Pos' + i + '"">0</div>';
	 	    		txt += '<div class="etiq">Diners:</div><div id="Mon' + i + '"">600</div>';
	 	    		txt += '<div class="etiq">Graus(nivell): </div> <div id=Graus' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Unis: </div><div id=Unis' + i +'>Cap</div>';
	 	    		txt += '<div class="etiq">Companyies de ferrocarrils: </div><div id=Daus' + i +'>Cap</div>';
	 	    		txt += '</td>';
				}
			}
 	    	txt += '</tr></table>';
 	    	$('#col2').html(txt);
 	    	alert = false;
 	    	$('#col1').show();
 	    	monopoly();
		}
	}
	if (alert) alert("Has de selccionar el nombre de IA!!!");
}
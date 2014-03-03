function cosa() {
	var txt = "";
	for (var i = 0; i < 6; ++i) {
		txt += "<div id='prova" + i + "'>" + i + "</div>";
	}
	$(".wrapper").html(txt);
	for (var i = 0; i < 6; ++i) {
		$("#prova" + i).text(i + 10);
	}
}
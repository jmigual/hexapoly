var hola = new Array(3);
hola[0] = function (pere) {
	if (pere == 3) return true;
	return false;
};

for (var i = 0; i < 10; ++i) console.log(hola[0](i));
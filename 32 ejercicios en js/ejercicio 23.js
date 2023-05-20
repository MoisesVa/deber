

function principal() {
	var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("digite la cantidad de numeros a sumarse: ",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("la suma es: ",suma,'<BR/>');
}


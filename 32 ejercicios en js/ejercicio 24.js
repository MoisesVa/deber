

function sin_titulo() {
	var suma_pares = new Number();
	var suma_impares = new Number();
	var i = new Number();
	suma_pares = 0;
	document.write("ingresa numero: ",'<BR/>');
	suma_impares = Number(prompt());
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	document.write("la suma de pares es: ",suma_pares,'<BR/>');
	document.write("la suma de impares es: ",suma_impares,'<BR/>');
	suma_impares = 0;
}


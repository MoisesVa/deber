

function principal() {
	var n_elementos = new Number();
	var i = new Number();
	var num = new Number();
	var suma_pares = new Number();
	var conteo_pares = new Number();
	var suma_impares = new Number();
	var conteo_impares = new Number();
	var promedio_impares = new Number();
	document.write("digite la cantidad de elementos a ingresar: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	suma_impares = 0;
	conteo_impares = 0;
	while (i<=n_elementos) {
		document.write(i,".digite un numero: ",'<BR/>');
		num = Number(prompt());
		if (num%2==0) {
			suma_pares = suma_pares+num;
			conteo_pares = conteo_pares+1;
		} else {
			suma_impares = suma_impares+num;
			conteo_impares = conteo_impares+1;
		}
		i = i+1;
	}
	if (conteo_pares==0) {
		document.write("no se han digitado numeros pares",'<BR/>');
	} else {
		document.write("la suma de los numeros pares es: ",suma_pares,'<BR/>');
		document.write("el conteo de los numeros pares es: ",conteo_pares,'<BR/>');
	}
	if (conteo_impares==0) {
		document.write("no se han digitado numeros impares",'<BR/>');
	} else {
		promedio_impares = suma_impares/conteo_impares;
		document.write("el promedio de impares es: ",promedio_impares,'<BR/>');
	}
}


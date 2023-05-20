

function principal() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("digite dos numeros: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	document.write("el resultado es: ",resultado,'<BR/>');
}


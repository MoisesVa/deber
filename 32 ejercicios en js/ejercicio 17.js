

function principal() {
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	document.write("digite tres numeros diferentes: ",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	if (num1>num2 && num1>num3) {
		document.write("el mayor es: ",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			document.write("el mayor es: ",num2,'<BR/>');
		} else {
			document.write("el mayor es: ",num3,'<BR/>');
		}
	}
}


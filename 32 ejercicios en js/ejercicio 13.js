
function principal() {
	var num = new Number();
	document.write("digite un numero: ",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("el numero ",num," es par",'<BR/>');
	} else {
		document.write("el numero ",num," es impar",'<BR/>');
	}
}


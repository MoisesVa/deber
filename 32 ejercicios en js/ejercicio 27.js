
function principal() {
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("digite un numero: ",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("el factorial es: ",factorial,'<BR/>');
}


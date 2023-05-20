
function principal() {
	var opcion = new Number();
	document.write("MENU",'<BR/>');
	document.write("1. Elevar un numero a una potencia X(poner numero de menor a mayor)",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("digite una opcion:",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("digite un numero:",'<BR/>');
		num = Number(prompt());
		document.write("digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("el resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("digite un numero:",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("el resultado es: ",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("se equivoco en opcion de menu",'<BR/>');
	}
}


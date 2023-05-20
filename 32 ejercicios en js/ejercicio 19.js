

function principal() {
	var num = new Number();
	document.write("digite un numero del dia de la semana: ",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("Lunes",'<BR/>');
		break;
	case 2:
		document.write("Martes",'<BR/>');
		break;
	case 3:
		document.write("Miercoles",'<BR/>');
		break;
	case 4:
		document.write("Jueves",'<BR/>');
		break;
	case 5:
		document.write("Viernes",'<BR/>');
		break;
	case 6:
		document.write("Sabado",'<BR/>');
		break;
	case 7:
		document.write("Domingo",'<BR/>');
		break;
	default:
		document.write("error, no existe dia para ese numero",'<BR/>');
	}
}


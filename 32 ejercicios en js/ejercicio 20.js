

function principal() {
	var decada = new Number();
	document.write("digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("bodas de hojalata",'<BR/>');
		break;
	case 20:
		document.write("boda de porcelana",'<BR/>');
		break;
	case 30:
		document.write("boda de perlas",'<BR/>');
		break;
	case 40:
		document.write("bodas de rubi",'<BR/>');
		break;
	case 50:
		document.write("bodas de oro",'<BR/>');
		break;
	case 60:
		document.write("bodas de diamante",'<BR/>');
		break;
	default:
		document.write("decada no existente",'<BR/>');
	}
}


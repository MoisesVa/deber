
function principal() {
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	var promedio = new Number();
	document.write("digite las 3 calificaciones",'<BR/>');
	nota1 = Number(prompt());
	nota2 = Number(prompt());
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=70) {
		document.write("el alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write("El alumno esta reprobado con: ",promedio,'<BR/>');
	}
}


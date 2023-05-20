

function principal() {
	var num_hombres = new Number();
	var num_mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("digite el numero de hombres:",'<BR/>');
	num_hombres = Number(prompt());
	document.write("digite el numero de mujeres: ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajem = num_mujeres/total_estudiantes*100;
	document.write(" (toma en cuenta los primeros dos numeros)el porcentaje de hombres es: ",porcentajeh,"%",'<BR/>');
	document.write("(toma en cuenta los primeros dos numeros) el porcentaje de mujeres es: ",porcentajem,"%",'<BR/>');
}


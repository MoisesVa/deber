

function principal() {
	var i = new Number();
	var salario_cada = new Number();
	var horas = new Number();
	var tarifa = new Number();
	var sumatoria_salario = new Number();
	var num_trabajadores = new Number();
	i = 1;
	sumatoria_salario = 0;
	document.write("digite el numero de trabajores: ",'<BR/>');
	num_trabajadores = Number(prompt());
	document.write("digite la tarifa: ",'<BR/>');
	tarifa = Number(prompt());
	while (i<=num_trabajadores) {
		document.write(i,".digite el valor de horas trabajadas por este trabajador:",'<BR/>');
		horas = Number(prompt());
		salario_cada = horas*tarifa;
		document.write("el valor a pagar de este trabajador es: ",salario_cada,'<BR/>');
		i = i+1;
		sumatoria_salario = sumatoria_salario+salario_cada;
	}
	document.write(" el valor total de salarios a pagar es de: ",sumatoria_salario,'<BR/>');
}


Algoritmo principal
	definir i como entero;
	definir salario_cada,horas,tarifa,sumatoria_salario,num_trabajadores como enteros;
	i <- 1;
	sumatoria_salario <- 0;
	Escribir "digite el numero de trabajores: ";
	Leer num_trabajadores;
	Escribir "digite la tarifa: ";
	Leer tarifa;
	Mientras i<=num_trabajadores Hacer
		Escribir i,".digite el valor de horas trabajadas por este trabajador:";
		Leer horas;
		salario_cada <- horas*tarifa;
		Escribir "el valor a pagar de este trabajador es: ",salario_cada;
		i <- i+1;
		sumatoria_salario <- sumatoria_salario+salario_cada;
	FinMientras
	Escribir " el valor total de salarios a pagar es de: ",sumatoria_salario;
FinAlgoritmo

Algoritmo principal
	Definir num_hombres,num_mujeres como enteros;
	definir total_estudiantes como enteros;
	definir porcentajeH, porcentajeM como reales;
	Escribir "digite el numero de hombres:";
	Leer num_hombres;
	Escribir "digite el numero de mujeres: ";
	Leer num_mujeres;
	total_estudiantes <- num_hombres+num_mujeres;
	porcentajeH <- num_hombres / total_estudiantes * 100;
	porcentajeM <- num_mujeres/total_estudiantes * 100;
	Escribir " (toma en cuenta los primeros dos numeros)el porcentaje de hombres es: ",porcentajeH,"%";
	Escribir "(toma en cuenta los primeros dos numeros) el porcentaje de mujeres es: ",porcentajeM,"%";
FinAlgoritmo

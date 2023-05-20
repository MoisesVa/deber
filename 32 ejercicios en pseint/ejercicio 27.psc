Algoritmo principal
	definir num como entero;
	definir i,factorial como entero;
	Repetir
		Escribir "digite un numero: ";
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	Mientras i<=num Hacer
		factorial <- factorial*i;
		i <- i+1;
	FinMientras
	Escribir "el factorial es: ",factorial;
FinAlgoritmo

Algoritmo principal
	Definir cantidadA,cantidadB,cantidadC Como Enteros;
	Definir tiempoA,tiempoB,tiempoC Como Enteros;
	Definir tiempo_total Como Entero;
	Definir horas, minutos como enteros;
	Escribir "digite la cantidad de cuestionarios A: ";
	Leer cantidadA;
	Escribir "digite la cantidad de cuestionarios B: ";
	Leer cantidadB;
	Escribir "digite la cantidad de cuestionarios C: ";
	Leer cantidadC;
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	tiempo_total <- tiempoA + tiempoB + tiempoC;

	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	Escribir "se tardara ",horas," horas y ",minutos," minutos ";
	
FinAlgoritmo

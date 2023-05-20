Algoritmo sin_titulo
	definir suma_pares, suma_impares,i como enteros;
	suma_pares <- 0;
	escribir "ingresa numero: ";
	leer suma_impares;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2 = 0 Entonces
			suma_pares <- suma_pares+i;
		SiNo
			suma_impares <- suma_impares+i;
		FinSi
	FinPara
	Escribir "la suma de pares es: ",suma_pares;
	Escribir "la suma de impares es: ",suma_impares;
	suma_impares <- 0;
FinAlgoritmo

Algoritmo principal
	Definir n_elementos,i,num como enteros;
	Definir suma_pares,conteo_pares Como Enteros;
	Definir suma_impares,conteo_impares Como Enteros;
	Definir promedio_impares Como Real;
	Escribir "digite la cantidad de elementos a ingresar: ";
	Leer n_elementos;
	i<-1;
	suma_pares <- 0 ;
	conteo_pares <- 0;
	suma_impares <- 0;
	conteo_impares <- 0;
	Mientras i <= n_elementos Hacer
		Escribir i,".digite un numero: ";
		Leer num;
		si num mod 2 = 0 Entonces
			suma_pares <- suma_pares + num;
			conteo_pares <- conteo_pares + 1;
		SiNo
			suma_impares <- suma_impares + num;
			conteo_impares <- conteo_impares + 1;
		FinSi
		i <- i + 1;
		
	FinMientras
	si conteo_pares = 0 Entonces
		Escribir "no se han digitado numeros pares";
	SiNo
		Escribir "la suma de los numeros pares es: ",suma_pares;
		Escribir "el conteo de los numeros pares es: ",conteo_pares;
	FinSi
	si conteo_impares = 0 Entonces
		Escribir "no se han digitado numeros impares";
	SiNo
		promedio_impares <- suma_impares/conteo_impares;
		Escribir "el promedio de impares es: ",promedio_impares;
	FinSi
FinAlgoritmo

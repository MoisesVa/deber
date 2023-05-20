Algoritmo principal
	Definir num1,num2,resultado como reales;
	Escribir "digite dos numeros: ";
	Leer num1,num2;
	si num1=num2 Entonces
		
		resultado<- num1*num2;
	SiNo
		si num1>num2 Entonces
			resultado<-num1-num2;
		SiNo
			resultado<-num1+num2;
		FinSi
		
	FinSi
	Escribir "el resultado es: ",resultado;
	
	
FinAlgoritmo

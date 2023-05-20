Algoritmo principal
	definir opcion como entero;
	Escribir "MENU";
	Escribir "1. Elevar un numero a una potencia X(poner numero de menor a mayor)";
	Escribir "2. Sacar la raiz cuadrada de un numero";
	Escribir "3. Salir";
	Escribir "digite una opcion:";
	Leer opcion;
	Segun opcion Hacer
		1:
			definir num,pot,resultado como reales;
			Escribir "digite un numero:";
			Leer num;
			Escribir "digite la potencia";
			Leer pot;
			resultado <- num^pot;
			Escribir "el resultado es: ",resultado;
		2:
			definir num,resultado como reales;
			Escribir "digite un numero:";
			Leer num;
			resultado <- rc(num);
			Escribir "el resultado es: ",resultado;
		3:
		De Otro Modo:
			Escribir "se equivoco en opcion de menu";
	FinSegun
FinAlgoritmo

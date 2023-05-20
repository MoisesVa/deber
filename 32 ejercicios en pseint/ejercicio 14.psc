Algoritmo principal
	definir nota1,nota2,nota3 como reales;
	definir promedio como real;
	Escribir "digite las 3 calificaciones";
	Leer nota1,nota2,nota3;
	promedio <- (nota1+nota2+nota3)/3;
	Si promedio>=70 Entonces
		Escribir "el alumno esta aprobado con: ",promedio;
	SiNo
		Escribir "El alumno esta reprobado con: ",promedio;
	FinSi
FinAlgoritmo

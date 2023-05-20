Algoritmo principal 
	Definir horas, minutos,seg Como Enteros;
	Definir horas_seg, minutos_seg, total_seg Como Enteros;
	Escribir "Digite las horas: ";
	Leer horas;
	Escribir "Digite los minutos: ";
	Leer minutos;
	Escribir "Digite los segundos: ";
	Leer seg;
	horas_seg <- horas * 3600; 
	minutos_seg <- minutos * 60; 
	total_seg <- horas_seg + minutos_seg + seg;
	Escribir "el total de segundos es: ",total_seg;
	
	
	
	
	
FinAlgoritmo

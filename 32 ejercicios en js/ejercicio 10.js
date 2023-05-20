
function principal() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("digite la cantidad de cuestionarios A: ",'<BR/>');
	cantidada = Number(prompt());
	document.write("digite la cantidad de cuestionarios B: ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("digite la cantidad de cuestionarios C: ",'<BR/>');
	cantidadc = Number(prompt());
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	tiempo_total = tiempoa+tiempob+tiempoc;
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("se tardara ",horas," horas y ",minutos," minutos ",'<BR/>');
}


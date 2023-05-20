

function sin_titulo() {
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,".digite una calificacion: ",'<BR/>');
		calificacion = Number(prompt());
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("la calificacion promedio es: ",calificacion_promedio,'<BR/>');
	document.write("la calificacion mas baja es: ",calificacion_baja,'<BR/>');
}


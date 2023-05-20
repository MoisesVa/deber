

function principal() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite la cantidad a pagar (se obtiene un % si la cantidad es mayor de 100: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("el precio a pagar es: ",precio_final,'<BR/>');
}


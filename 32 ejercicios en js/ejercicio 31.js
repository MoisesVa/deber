
function principal() {
	var resultado = new Number();
	var num1 = new Number();
	var num2 = new Number();
	document.write("digite un numero:",'<BR/>');
	num1 = Number(prompt());
	document.write("digite un numero:",'<BR/>');
	num2 = Number(prompt());
	resultado = Math.pow(num1,num2);
	document.write("usa una calculadora no mames aqui esta el resultado:",resultado,'<BR/>');
}


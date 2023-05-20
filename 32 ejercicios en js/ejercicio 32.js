

function prinpicial() {
	var hojaa = new Number();
	var hojab = new Number();
	var hojac = new Number();
	var hoja1 = new Number();
	var hoja2 = new Number();
	var hoja3 = new Number();
	document.write(" cuantas hojas de tipo a hay",'<BR/>');
	hojaa = Number(prompt());
	document.write(" cuantas hijas de tipo b hay",'<BR/>');
	hojab = Number(prompt());
	document.write("cuantas hojas tipo c hay",'<BR/>');
	hojac = Number(prompt());
	hoja1 = hojaa*5;
	hoja2 = hojab*8;
	hoja3 = hojac*6;
	document.write("se tarda estos minutos en revisar hojas a: ",hoja1,'<BR/>');
	document.write(" se tarda estos minutos en revisar hojas b: ",hoja2,'<BR/>');
	document.write("se tarda estos minutos en revisar hojas c: ",hoja3,'<BR/>');
}


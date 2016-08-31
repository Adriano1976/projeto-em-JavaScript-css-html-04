function calcular_area(altura,largura)
{
	var area = altura * largura;
	return area / 2;
}

function mostrar_area(form)
{
	var area = calcular_area
		(parseFloat(form.altura.value), 
		parseFloat(form.largura.value));

		alert(area.toFixed(2) + "m²");
		
}
function busquedaBinaria(array, item){

	var indiceMinimo = 0;
	var indiceMaximo = array.length - 1;

	while(indiceMinimo <= indiceMaximo){
		var indiceMedio = Math.floor((indiceMinimo + indiceMaximo) / 2);
		var busqueda = array(indiceMedio);

		if(busqueda === item){
			return indiceMedio;
		}

		if(busqueda > item){
			indiceMaximo = indiceMedio - 1;
		} else {
			indiceMinimo = indiceMedio + 1;
		}
	}

	return -1;
	
}
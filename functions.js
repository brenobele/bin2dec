// Função para converter número binário para decimal
function bin2dec() {
	// Pegamos os elementos
	let bin = document.getElementById("binario");
	let dec = document.getElementById("decimal");
	
	// Pega o valor do elemento
	let binValue = bin.value;

	// Inicializamos a variavel total
	let total = 0;
	// Inicializamos a variavel i, que representa a casa atual
	let i = binValue.length - 1;

	// A função realiza a conversão apenas de número com até 8 números binários
	// Se for maior que 8 número avisa ao usuário
	if (i < 8) {
		// Para cada número faz o cálculo
		// Se for diferente de 0 e 1 avisa ao usuário que só é aceito 0 e 1
		// Se for 0 não calcula
		[...binValue].forEach(number => {
			// Se for o número 1 realiza o cálculo
			if (number === "1") {
				total += 2 ** i;
			} else if (number !== "0" && number !== "1") {
				alert("Apenas 0 e 1 permitido.");
				bin.value = "";
				dec.value = "";
			}
			// Reduz uma casa a cada iteração
			i--;
		});
	} else {
		alert("Apenas 8 dígitos binários.");
		bin.value = "";
		dec.value = "";
	}

	// Atualiza o valor total.
	dec.value = total;
}

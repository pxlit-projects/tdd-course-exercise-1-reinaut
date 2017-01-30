
function beoordeelSpeculaas(speculaas) {
	var som = 0;
	for (var prop in speculaas) if (speculaas.hasOwnProperty(prop)) {
		if (typeof speculaas[prop] === "number") {
			som += speculaas[prop];
		}
	}
	return som;
}

function beoordeelSpeculaas(speculaas) {
	return Object.keys(speculaas).reduce(function (previous, currentProperty) {
		return previous + speculaas[currentProperty];
	}, 0);
}
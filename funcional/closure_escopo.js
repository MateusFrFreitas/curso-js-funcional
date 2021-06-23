const x = 3

function fora() {
	const x = 97
	
	return function somarXMain3() {
		return x + 3
	}
}

module.exports = fora()
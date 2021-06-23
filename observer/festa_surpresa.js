const readline = require('readline')

function obterResposta(pergunta) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	return new Promise(resolve => {
		rl.question(pergunta, resp => {
			resolve(resp)
			rl.close()
		})
	})
}

function namorada() {
	console.log('N: Apagar as luzes')
	console.log('N: Pedir silêncio')
	console.log('N: Surpresa!!!!')	
}

function sindico() {
	console.log('S: Monitorando barulho')	
}

async function porteiro(interessados) {
	while(true) {
		const resp = (await obterResposta('O namorado chegou? (s/N/q) ')).toLowerCase()			

		if(resp === 's') {
			(interessados || []).forEach(obs => obs())
		} else if(resp === 'q') {
			break
		}
	}
}

/*
	Chamada da função -> Registra dois observadores
	Os observadores são: namorada e síndico
	O subject é o porteiro!
*/

porteiro([namorada, sindico])
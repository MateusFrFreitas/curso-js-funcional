const pessoa = {
	nome: 'Maria',
	altura: 1.76,
	cidade: 'São Paulo',
	end: {
		rua: 'Feliz'
	}
}

// Atribuição por referência
const outraPessoa = pessoa

// Passagem por referência
function alteraPessoa(pessoa) {
	const novaPessoa = { ...pessoa }

	novaPessoa.nome = 'João'
	novaPessoa.cidade = 'Fortaleza'
	novaPessoa.end.rua = 'ABC'

	return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)

console.log(pessoa, novaPessoa)

let a = 3
let b = a // atribuição por valor (cópia)

a++
b--

console.log(a, b)
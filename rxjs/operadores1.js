// Os dois tipos...

// 1. Operadores de criação
const { of, from } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators')

// of(1, 2, 'ana', false, 'último')
from([1, 2, 'ana', false, 'último'])
	.pipe(
		last(),
		map(v => v[0]),
		map(v => `A letra encontrada foi: ${v}`)
	)
	.subscribe(console.log)
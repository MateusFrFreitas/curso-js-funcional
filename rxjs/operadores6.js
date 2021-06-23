const { from, Observable } = require('rxjs')

function createPipeableOperator(operator) {
	return function (source) {
		return new Observable(subscriber => {
			const sub = operator(subscriber)
			source.subscribe({
				next: sub.next,
				error: sub.error || (e => subscriber.error(e)),
				complete: sub.complete || (e => subscriber.complete(e)),
			})
		})
	}
}

function primeiro() {
	return createPipeableOperator(subscriber => ({
		next(valor) {
			subscriber.next(valor)
			subscriber.complete()
		}
	}))
	// return createPipeableOperator((subscriber, v) => {
	// 	subscriber.next(v)
	// 	subscriber.complete()
	// })
}

function nenhum() {
	return createPipeableOperator(subscriber => ({
		next(valor) {
			subscriber.next(valor)
			subscriber.complete()
		}
	}))
}

function ultimo() {
	let ultimo
	return createPipeableOperator(subscriber => ({
		next(v) {
			ultimo = v
		},
		complete() {
			if (ultimo !== undefined) {
				subscriber.next(ultimo)
				subscriber.complete()
			}
		}
	}))
}

from([1, 2, 3, 4, 5])
	.pipe(
		primeiro(),
		// nenhum(),
		// ultimo()
	)
	.subscribe(console.log)
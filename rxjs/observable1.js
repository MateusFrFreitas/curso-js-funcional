const { Observable } = require('rxjs')

const promise = new Promise((resolve, reject) => {
	resolve('Promise é bem legal!')
})

promise.then(console.log)

const observable = new Observable(subscriber => {
	subscriber.next('Observer')
	subscriber.next('é')
	subscriber.next('bem')
	setTimeout(() => {
		subscriber.next('legal!')
		subscriber.complete()
	})
})

observable.subscribe(console.log)
observable.subscribe(texto => console.log(texto.toUpperCase()))
Number.prototype.log = function() {
	console.log(this)
}
Function.prototype.log = function() {
	console.log(this.toString())
}

let r = 3

const I = a => a

I(3).log()
I(I).log()

const SELF = f => f(f)

SELF(I).log()

const PRI = a => _ => a
PRI(7)(11).log()

const ULT = _ => b => b
ULT(7)(11).log()

const TROCA = f => a => b => f(b)(a)

TROCA(ULT)(7)(11).log()
TROCA(PRI)(7)(11).log()

const ULT2 = a => b => TROCA(PRI)(a)(b)

ULT2(13)(20).log()

// boolean TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

T
F

// NOT
const NOT = a => a(F)(T)

NOT(T).log()
NOT(F).log()

// AND
const AND = a => b => a(b)(F)

AND(T)(T).log()

// Or.log()
const OR = a => b => a(T)(b)

OR(F)(T).log()

const EQ = a => b => a(b)(NOT(b))

EQ(T)(T).log()
EQ(T)(F).log()
EQ(F)(F).log()
EQ(F)(T).log()

const XOR = a => b => NOT(EQ(a)(b))

XOR(T)(T).log()
XOR(T)(F).log()
XOR(F)(F).log()
XOR(F)(T).log()
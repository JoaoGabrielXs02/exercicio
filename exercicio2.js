var numStr = '123.45'
console.log(numStr)

var numero = parseFloat(numStr)
console.log(numero)

var numeroInt = Math.round(numero)
console.log(numeroInt)

var numeroInt2 = parseInt(numero)
console.log(numeroInt2)

var stringDecimal = numeroInt.toFixed(3)
console.log(stringDecimal)

var verifica = isNaN(numStr)
console.log(verifica)
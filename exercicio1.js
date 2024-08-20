var frase = "JavaScript é incrivel"
console.log(frase)

var comprimento = frase.length
console.log(comprimento)


var palavra = frase.split(' ')
console.log(palavra[2])

var resultado = frase.match(/incrivel/)
console.log(resultado[0])

var novaFrase = frase.replace('incrivel', 'fantastico')
console.log(novaFrase)

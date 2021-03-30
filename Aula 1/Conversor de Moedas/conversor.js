var valorEmDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

var valorEmReal = valorEmDolar * 5.5

valorEmReal = parseFloat(valorEmReal)
var valorEmDecimal = valorEmReal.toFixed(2)

alert(`O valor em dólares é $${valorEmDolar} e em reais é R$${valorEmDecimal}.`)

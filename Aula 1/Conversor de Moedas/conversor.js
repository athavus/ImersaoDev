var valorEmDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

var valorEmReal = parseFloat(valorEmDolar * 5.5).toFixed(2)

alert(`O valor em dólares é $${valorEmDolar} e em reais é R$${valorEmReal}.`)

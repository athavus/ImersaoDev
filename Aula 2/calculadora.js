var primeiroValor = parseInt(prompt('Insira o primeiro número: '))

var segundoValor = parseInt(prompt('Insira o segundo número: '))

var operacao = parseInt(prompt("Qual operação você deseja fazer? \n1 = adição\n2 = subtração\n3 = multiplicação\n4 = divisão"))

soma = primeiroValor + segundoValor
subtracao = primeiroValor - segundoValor
multiplicacao = primeiroValor * segundoValor
divisao = primeiroValor / segundoValor

if (operacao == 1) {
  document.write(`<h2>${primeiroValor} + ${segundoValor} = ${soma}</h2>`)
} else if (operacao == 2) {
  document.write(`<h2>${primeiroValor} - ${segundoValor} = ${subtracao}</h2>`)
} else if (operacao == 3) {
  document.write(`<h2>${primeiroValor} x ${segundoValor} = ${multiplicacao}</h2>`)
} else if (operacao == 4) {
  document.write(`<h2>${primeiroValor} / ${segundoValor} = ${divisao}</h2>`)
} else {
  document.write("<h2>Opção inválida</h2>")
}

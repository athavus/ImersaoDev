var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 0

while (tentativas < 3) {
  
  tentativas = tentativas + 1
  
  var chute = parseInt(prompt("Digite um número entre 0 e 10: "))
  
  if (chute == numeroSecreto) {
    alert(`Acertou! O número secreto realmente era ${numeroSecreto}, você acertou com ${tentativas} tentativa(s)`)
    break
    
  } else {
      
      if (chute > numeroSecreto) {
        alert(`Errou! O número secreto certo é menor`)
      
      } else if (chute < numeroSecreto) {
          alert(`Errou! O número secreto certo é maior`)
        }
    }  
}
if (tentativas == 3 && chute !== numeroSecreto) {
  alert(`O número secreto era ${numeroSecreto}, você errou todas as suas três tentativas`)
}

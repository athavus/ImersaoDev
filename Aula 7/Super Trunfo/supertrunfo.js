var cartas = []

var continuar = prompt("Você quer jogar? SIM para jogar")

while (continuar == "SIM") {
  var carta = {
    nome: "",
    atributo: {
      ataque: 0,
      defesa: 0,
      magia: 0
    }
  }
  
  var nomeCarta = prompt("Digite o nome da carta:")
  while (nomeCarta == "") {
    alert("Você não digitou nenhum nome para a carta! Tente de novo")
    var nomeCarta = prompt("Digite o nome da carta: ")
    }
  carta.nome = nomeCarta

  var ataqueCarta = prompt("Digite o ataque da carta:")
  while (ataqueCarta == "" || ataqueCarta == NaN || ataqueCarta != parseInt(ataqueCarta)) {
    alert("Você não digitou um número válido para o ataque! Tente de novo")
    var ataqueCarta = prompt("Digite o ataque da carta:")
    }
  carta.atributo.ataque = ataqueCarta
  
  var defesaCarta = prompt("Digite a defesa da carta:")
  while (defesaCarta == "" || defesaCarta == NaN || ataqueCarta != parseInt(ataqueCarta)) {
    alert("Você não digitou um número válido para a defesa! Tente de novo")
    var defesaCarta = prompt("Digite a defesa da carta:")
    }
  carta.atributo.defesa = defesaCarta
  
  var magiaCarta = prompt("Digite a magia da carta:")
  while (magiaCarta == undefined || magiaCarta == NaN || ataqueCarta != parseInt(ataqueCarta)) {
    alert("Você não digitou um número válido para a magia! Tente de novo")
    var magiaCarta = prompt("Digite a magia da carta:")
    }
  carta.atributo.magia = magiaCarta
  
  cartas.push(carta)
  
  var continuar = prompt("Você quer continuar? SIM para continuar")
  if (continuar == "SIM"){
    continue
  } else {
    break
  }
}

var cartaMaquina = ""
var cartaJogador = ""

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  while (numeroCartaJogador == numeroCartaMaquina) {
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  }
  cartaJogador = cartas[numeroCartaJogador]

  console.log(cartaJogador)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributo) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    if (atributoSelecionado == undefined) {
      console.log("Você não clicou em nenhum dos atributos")
    } else {
      if (cartaJogador.atributo[atributoSelecionado] > cartaMaquina.atributo[atributoSelecionado]) {
      alert("VOCÊ VENCEU! A MÁQUINA PERDEU")
    } else if (cartaJogador.atributo[atributoSelecionado] == cartaMaquina.atributo[atributoSelecionado]) {
      alert("EMPATE!")
    } else if (cartaJogador.atributo[atributoSelecionado] < cartaMaquina.atributo[atributoSelecionado]) {
      alert("VOCÊ PERDEU! A MÁQUINA GANHOU")
    }
    console.log(`A carta da máquina era ${cartaMaquina.nome} e seu atributo era ${atributoSelecionado} com valor ${cartaMaquina.atributo[atributoSelecionado]}`)
  }
}

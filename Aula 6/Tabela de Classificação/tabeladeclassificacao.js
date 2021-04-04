var nome2 = prompt("Digite o nome do primeiro jogador/time:")
var nome1 = prompt("Digite o nome do segundo jogador/time:")

var paulo = {
  nome: nome1,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var rafa = {
  nome: nome2,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

var jogadores = [rafa, paulo]

function adicionarVitoria(i) {
  if (i == 1) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogadores[0].derrotas++
    jogador.pontos = calculaPontos(jogador)
    jogadores[0].pontos = calculaPontos(jogadores[0])
  } else {
      var jogador = jogadores[i]
      jogador.vitorias++
      jogadores[1].derrotas++
      jogador.pontos = calculaPontos(jogador)
    }
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogadores[0].empates++
  jogadores[1].empates++
  jogadores[0].pontos = calculaPontos(jogador)
  jogadores[1].pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  if (i == 1) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogadores[0].vitorias++
    jogadores[0].pontos = calculaPontos(jogadores[0])
  } else {
      var jogador = jogadores[i]
      jogador.derrotas++
      jogadores[1].vitorias++
      jogadores[1].pontos = calculaPontos(jogadores[1])
  }
  exibirJogadoresNaTela(jogadores)
}

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for (var i = 0; i < jogadores.length; i++) {
    html += `<tr><td>${jogadores[i].nome}</td>`
    html += `<td>${jogadores[i].vitorias}</td>`
    html += `<td>${jogadores[i].empates}</td>`
    html += `<td>${jogadores[i].derrotas}</td>`
    html += `<td>${jogadores[i].pontos}</td>`
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

exibirJogadoresNaTela(jogadores)

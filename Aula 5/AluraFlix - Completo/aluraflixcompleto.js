function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = `<img src=${filme}>`
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function adicionarFilme() {
  var campoFilmeFavortio = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavortio.value
  if (filmeFavorito.endsWith(".jpg") == true) {
    listarFilmesNaTela(filmeFavorito)  
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavortio.value = ""
}

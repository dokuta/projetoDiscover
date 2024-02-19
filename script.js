function toggleMode() {
  // modo manual e depois modo automático
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // pegar a tag html
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver no modo claro, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não tiver no modo claro, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

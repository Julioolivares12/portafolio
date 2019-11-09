function mostrarejercicio(url, t) {

    var titulo = document.getElementById('mostrarNombreEjercicio')
    titulo.innerHTML = t
    var img = document.getElementById('ejercicio')
    img.setAttribute('src', url)

}
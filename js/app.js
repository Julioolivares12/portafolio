function mostrarejercicio(url, t) {

    var titulo = document.getElementById('mostrarNombreEjercicio')
    titulo.innerHTML = t
    var img = document.getElementById('ejercicio')
    img.setAttribute('src', url)

}

function teoriaCapitulo1(title) {
    var app = document.getElementById('app');
    if (app.hasChildNodes()) {
        var nodeHijo = app.getElementsByTagName('img')


        document.getElementById('mostrarNombreEjercicio').innerHTML = title

    } else {
        app
    }
}

function cambiarIFrame(url) {
    var iframe = document.getElementById('miPaginas');
    iframe.setAttribute('src', url)
}
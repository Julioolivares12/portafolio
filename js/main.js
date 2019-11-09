function miMenu(event) {
    var lis = document.getElementsByClassName('subMenu')
    for (let index = 0; index < lis.length; index++) {
        const element = lis[index];
        element.className = 'menuMostrar'
    }
}
//window.onload = init;

function init() {
    document.querySelectorAll('.subMenu')[0].addEventListener('onClick', () => {
        var estado = document.querySelector(".subMenu > li").style.display
        if (estado == "none") {
            document.querySelector(".submenu > ul").style.display = "block";
        } else {
            document.querySelector(".submenu > ul").style.display = "none";
        }
    });
    document.querySelector('.subMenu > li').style.display = "none";
}

function esconderMenu(event) {
    var estado = document.querySelector('.subMenu > li').style.display
    if (estado == "none") {
        document.querySelector('.subMenu  li').style.display = "list-item";
    } else {
        document.querySelector('.subMenu  li').style.display = "none";
    }
}
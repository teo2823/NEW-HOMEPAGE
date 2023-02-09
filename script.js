document.getElementById("bars").addEventListener("click", mostrar_menu);
document.getElementById('blur-content').addEventListener("click", ocultar_menu);
let nav = document.getElementById('nav');
let blurMenu = document.getElementById('blur-content');

function mostrar_menu(){
    nav.style.right = '0px';
    blurMenu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = '-250px';
    blurMenu.style.display = "none";
}
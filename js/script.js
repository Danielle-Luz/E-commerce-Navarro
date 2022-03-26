let imgs = ["https://i.imgur.com/INRmNwZ.png", "https://i.imgur.com/c9IAvPA.png", "sapato.png"];


let b_fem = document.getElementById("b-fem");
let b_masc = document.getElementById("b-masc");
let b_nb = document.getElementById("b-nb");

let m_fem = document.getElementById("m-fem");
let m_masc = document.getElementById("m-masc");
let m_nb = document.getElementById("m-nb");

let menu_lista=[m_fem,m_masc,m_nb];

let bi1 = document.getElementById("b1-slide");
let bi2 = document.getElementById("b2-slide");
let bi3 = document.getElementById("b3-slide");

bi1.onclick = function () { mudar(bi1) };
bi2.onclick = function () { mudar(bi2) };
bi3.onclick = function () { mudar(bi3) };

b_fem.onclick = function(){mostrar(b_fem)};
b_masc.onclick= function(){mostrar(b_masc)};
b_nb.onclick= function(){mostrar(b_nb)};
m_fem.onmouseleave = function(){ocultar(0)};
m_masc.onmouseleave= function(){ocultar(1)};
m_nb.onmouseleave= function(){ocultar(2)};

function mudar(botao) {
    document.querySelector("#banner").setAttribute("src", imgs[botao.getAttribute("data-n")]);
}
function mostrar(botao){
    menu_lista[botao.getAttribute("data-menu")].style.display="block";
}
function ocultar(n){
    menu_lista[n].style.display="none";
}
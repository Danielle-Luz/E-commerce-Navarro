let imgs = ["https://i.imgur.com/INRmNwZ.png", "https://i.imgur.com/c9IAvPA.png", "https://i.imgur.com/5zUsbhq.png"];
let i = 0;
const b_gen=document.querySelectorAll(".menu-link");
const menu_lista=document.querySelectorAll(".div-table-menu");
const b_slide=document.querySelectorAll(".botao-slide");

const prod_interval=document.querySelector(".div-produtos-interval");
const b1_interval=document.getElementById("b1-interval");
const b2_interval=document.getElementById("b2-interval");

for(let i=0;i<b_slide.length;i++){
    b_slide[i].onclick=function () { mudar(b_slide[i]) };
}
for(let i=0;i<b_gen.length;i++){
    b_gen[i].onclick=function () { mostrar(b_gen[i]) };
}

document.querySelector(".nav").onmouseleave= function(){ocultar()} ;

function mudar(botao) {
    document.querySelector("#banner").setAttribute("src", imgs[botao.getAttribute("data-n")]);
    i=parseInt(botao.getAttribute("data-n"));
}
function mostrar(botao) {
    menu_lista[botao.getAttribute("data-menu")].style.display = "block";
    for(let i=0;i<menu_lista.length;i++){
        if(i!=botao.getAttribute("data-menu")){
            menu_lista[i].style.display="none";
        }
    }
}
function ocultar() {
    for(let i=0;i<menu_lista.length;i++){
        menu_lista[i].style.display = "none";
    }
}
setInterval(function () {
    document.querySelector("#banner").setAttribute("src", imgs[i]);
    i++;
    if (i == 3) {
        i = 0;
    }
},5000);

var y=0;
setInterval(function(){
    if(y>=prod_interval.scrollWidth){
        y=0;
    }
    prod_interval.scrollLeft=y;
    y+=200;
},3000);
b1_interval.onclick=function(){
    prod_interval.scrollLeft-=200;
};
b2_interval.onclick=function(){
    y+=200;
    prod_interval.scrollLeft=y;
};
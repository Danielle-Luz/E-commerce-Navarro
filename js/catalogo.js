const cards=document.querySelectorAll(".card");
const botoes=document.querySelectorAll(".filtro");
b_todas=document.getElementById("b-todas");

for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){filtrar(botoes[i])};
}

function filtrar(botao){
    for(let y=0;y<cards.length;y++){
        if(cards[y].getAttribute("data-bl")!=botao.textContent){
            cards[y].style.display="none";
        }else{
            cards[y].style.display="block";
        }
    }
}
function mostrarTodas(){
    for(let i=0;i<cards.length;i++){
        cards[i].style.display="block";
    }
}
b_todas.onclick=mostrarTodas;

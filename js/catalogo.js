b_rosa=document.getElementById("b-rosa");
b_branca=document.getElementById("b-branca");
b_rosa.onclick=function(){filtrar(b_rosa)};
b_branca.onclick=function(){filtrar(b_branca)};
function filtrar(botao){
    const cards=document.querySelectorAll(".card");
    for(let y=0;y<cards.length;y++){
        if(cards[y].getAttribute("data-bl")!=botao.textContent){
            cards[y].style.display="none";
        }else{
            cards[y].style.display="block";
        }
    }
}

alert(b_rosa.textContent);
//selecionando elementos com base em classes
const cards=document.querySelectorAll(".card");
const botoes=document.querySelectorAll(".filtro");
const b_todas=document.getElementById("b-todas");
const imgs_lista=document.querySelectorAll(".link-produto");

//guardando os valores dos atributos no armazenamento local
for(let i=0;i<imgs_lista.length;i++){
    imgs_lista[i].onclick=function(){
        localStorage.setItem("img_principal",imgs_lista[i].getAttribute("data-principal"));
        localStorage.setItem("imgs_laterais",imgs_lista[i].getAttribute("data-laterais"));
        localStorage.setItem("desconto",imgs_lista[i].getAttribute("data-desconto"));
        localStorage.setItem("parcelas",imgs_lista[i].getAttribute("data-parcelas"));
        localStorage.setItem("descricao",imgs_lista[i].getAttribute("data-descricao"));
        localStorage.setItem("titulo",imgs_lista[i].parentNode.querySelector("figcaption").querySelector(".prod-titulo").textContent);
        localStorage.setItem("preco",imgs_lista[i].parentNode.querySelector("figcaption").querySelector(".preco").textContent);
        
    }
}

//acionar filtragem em cada botão
for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){filtrar(botoes[i])};
}

//função de filtragem nos catálogos
function filtrar(botao){
    for(let y=0;y<cards.length;y++){
        let valor=cards[y].getAttribute("data-bl");
        let lista=valor.split(" ");
        for(let i=0;i<lista.length;i++){
            if(lista[i]==botao.textContent && cards[y].style.display.toString()=="block"){
                cards[y].style.display="block";
                break;
            }else if(i==(lista.length-1)){
                cards[y].style.display="none";
            }
        }
    }
    botao.style.backgroundColor="rgba(0,0,0,0.2)";
}

//função pra exibir todos os produtos num catálogo
function mostrarTodas(){
    for(let i=0;i<cards.length;i++){
        cards[i].style.display="block";
    }
    for(let i=0;i<botoes.length;i++){
        botoes[i].style.backgroundColor="transparent";
    }
}

//eventos para exibir todos os produtos
b_todas.onclick=mostrarTodas;
window.onload=mostrarTodas;
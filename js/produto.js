//variáveis pra os elementos do html produto
var prod_laterais=document.querySelectorAll(".img-lateral");

//atribuição dos valores do card ao produto
const produto=JSON.parse(sessionStorage.getItem("prod"));
document.querySelector(".img-principal").setAttribute("src",produto.img_principal);
document.querySelector(".img-principal").setAttribute("data-bl",produto.categoria);
document.querySelector(".descricao").innerHTML=produto.descricao;
document.querySelector(".nome-prod").textContent=produto.titulo;
document.querySelector(".prod-preco").textContent=produto.preco;
document.querySelector("del").textContent=produto.desconto;
document.querySelector("p.preco-info").textContent=produto.parcelas;

//alterar imagens laterais do produto ao passar com o mouse por cima
for(let i=0;i<prod_laterais.length;i++){
    prod_laterais[i].setAttribute("src",produto.imgs_laterais.split(",")[i]);
    prod_laterais[i].onmouseover=function(){
        document.querySelector(".img-principal").setAttribute("src",prod_laterais[i].getAttribute("src"));
        prod_laterais[i].style.border="1px solid #252525";
    };
    prod_laterais[i].onmouseleave=function(){
        document.querySelector(".img-principal").setAttribute("src",produto.img_principal)
        prod_laterais[i].style.border="none";
    }
}
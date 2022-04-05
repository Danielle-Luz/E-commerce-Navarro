//variáveis pra os elementos do html produto
var prod_laterais=document.querySelectorAll(".img-lateral");

//atribuição dos valores do card ao produto
document.querySelector(".img-principal").setAttribute("src",localStorage.getItem("img_principal"));
document.querySelector(".descricao").innerHTML=localStorage.getItem("descricao");
document.querySelector(".nome-prod").textContent=localStorage.getItem("titulo");
document.querySelector(".prod-preco").textContent=localStorage.getItem("preco");
document.querySelector("del").textContent=localStorage.getItem("desconto");
document.querySelector("p.preco-info").textContent=localStorage.getItem("parcelas");

//alterar imagens laterais do produto ao passar com o mouse por cima
for(let i=0;i<prod_laterais.length;i++){
    prod_laterais[i].setAttribute("src",localStorage.getItem("imgs_laterais").split(",")[i]);
    prod_laterais[i].onmouseover=function(){
        document.querySelector(".img-principal").setAttribute("src",localStorage.getItem("imgs_laterais").split(",")[i])
        prod_laterais[i].style.border="1px solid #252525";
    };
    prod_laterais[i].onmouseleave=function(){
        document.querySelector(".img-principal").setAttribute("src",localStorage.getItem("img_principal"))
        prod_laterais[i].style.border="none";
    }
}
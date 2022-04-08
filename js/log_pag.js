//função para validar login e senha na linha 69, já predefinidos com log e senha como "admin"
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        alert("Bem vindo Admin!");
    } else{
        alert("Usuário não encontrado. Faça o cadastro abaixo.");
    }

}
document.getElementById("logar").onclick=validate;
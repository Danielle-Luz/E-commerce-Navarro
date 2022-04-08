const submitBtn = document.querySelector('#submit-btn');
const user = document.querySelector('#user');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confPass = document.querySelector('#conf-pass');
const tac = document.querySelector('#terms');
const campos=[user,surname,email,password,confPass];

submitBtn.addEventListener('click', () => {
    let teste=true;
    if(user.value.length < 4){
        alert('O nome de usuário deve possuir no mínimo 4 letras');
        teste=false;
        user.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    if (!surname.value.length){
        alert('Informe seu nome completo');
        teste=false;
        surname.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    if (!email.value.length){
        alert('Informe seu email');
        teste=false;
        email.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    if (password.value.length < 8){
        alert('A senha deve possuir no mínimo 8 dígitos');
        teste=false;
        password.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    if(confPass.value!=password.value){
        alert('Digite senhas iguais.');
        confPass.setAttribute("class","rounded-3 form-control form-control-lg border-danger");
    }
    if(!tac.checked){
        alert('É necessário aceitar nossos termos e condições');
        teste=false;
    }
    if(teste){
        alert('Cadastro realizado com sucesso!');
    }
});
for(let i=0;i<campos.length;i++){
    campos[i].onclick=function(){
        campos[i].setAttribute("class","rounded-3 form-control form-control-lg border-dark");
    }
}


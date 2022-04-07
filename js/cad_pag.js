const submitBtn = document.querySelector('.submit-btn');
const user = document.querySelector('#user');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms');

submitBtn.addEventListener('click', () => {
    if(user.value.length < 4){
        alert('O nome de usuário deve possuir no mínimo 4 letras');
    } else if (!surname.value.length){
        alert('Informe seu nome completo');
    } else if (!email.value.length){
        alert('Informe seu email');
    } else if (password.value.length < 8){
        alert('A senha deve possuir no mínimo 8 dígitos');
    } else if(!tac.checked){
        alert('É necessário aceitar nossos termos e condições');
    } else{
        alert('Cadastro realizado com sucesso!');
    }
})


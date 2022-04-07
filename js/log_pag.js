//função para validar login e senha na linha 69, já predefinidos com log e senha como "admin"

const submitBtn = document.querySelector('.submit-btn');
const user = document.querySelector('#username');
const password = document.querySelector('#password');

submitBtn.addEventListener('click', () => {

    if(user.value == "admin" && password.value == "12345678"){
        alert('Login realizado com sucesso!');
    } else if (user.value < 4 || password.value < 8){
        alert('Dados incorretos. O nome de usuário deve possuir no mínimo 4 dígitos e a senha 8 dígitos');
    } else {
        alert('Cadastro não encontrado. Faça o cadastro pelo botão abaixo.');
    }
})
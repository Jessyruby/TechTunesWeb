const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

form.addEventListener('submit', (event) => {

    event.preventDefault()

    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isPasswordConfirmValid = checkPasswordConfirm();

    if (isUsernameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid) {
        alert('Registration successful!');

        axios.post('https://techtunes.onrender.com/user/signup', {
            name: username.value,
            email: email.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value
        })
        .then(response => {
            alert('Cadastro realizado com sucesso!');
            //window.location.href = 'login.html';  // Redireciona para a página de login
        })
        .catch(error => {
            console.error('Erro no cadastro:', error.response.data);
            alert('Erro ao realizar cadastro. Verifique os dados e tente novamente.');
        });
    }
})

function checkUsername() {
    const usernameValue = username.value

    const div = username.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')
    
    if(usernameValue === ""){
        errorInput("Preenchar o nome!", label, textMessage)

        return false
    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

        return true
    }
}

function checkEmail() {
    const emailValue = email.value
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const div = email.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')
    
    if(emailValue === ""){
        errorInput("Preenchar o email!", label, textMessage)

        return false

    } else if(!emailRegex.test(emailValue)) {

        errorInput("Email invalido!", label, textMessage)

        return false

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

        return true
    }
}

function checkPassword() {
    const passwordValue = password.value

    const div = password.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')
    
    if(passwordValue === ""){
        errorInput("Preenchar a senha!", label, textMessage)

        return false

    } else if(passwordValue.length < 8) {
        errorInput("A senha precisa ter no mínimo 8 caracteres.", label, textMessage)

        return false

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

        return true
    }
}

function checkPasswordConfirm() {
    const passwordConfirmValue = passwordConfirm.value

    const div = passwordConfirm.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')
    
    if(passwordConfirmValue === ""){

        errorInput("Você precisa confirmar a senha.", label, textMessage)

        return false

    } else if( passwordConfirmValue !== password.value) {
        
        errorInput("As senhas não são iguais.", label, textMessage)

        return false

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

        return true
    }
}

function errorInput(messagem, label, textMessage){

    textMessage.innerText = messagem
    label.style.borderColor = 'red'
}
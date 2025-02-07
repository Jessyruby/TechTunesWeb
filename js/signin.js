const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

const loadingOverlay = document.getElementById('loading');

form.addEventListener('submit', (event) => {

    event.preventDefault()

    loadingOverlay.style.display = 'flex';

        axios.post('https://techtunes.onrender.com/user/signin', {
            email: email.value,
            password: password.value
        })
        .then( (response) => {

            const result = response.data
            const { message, status} = result

            if (status !== 'SUCCESS') {
                
                checkEmail(message)
                checkPassword(message)


            } else {

                alert('Login com sucesso!')

                localStorage.setItem('isLoggedIn', 'true'); 
                window.location.href = '../pages/index.html';

            }
                
        })
        .catch(error => {
            console.error('Erro no login:', error.response.data);
            alert('Erro ao realizar login. Verifique suas credenciais.');

        })

        .finally(() => {

            loadingOverlay.style.display = 'none';
        });
    
})

function checkEmail(message) {
    
    const div = email.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')

    if(message == 'ocorreu um erro durante a verificação do usuário existente!'){

        errorInput('Email invalido!', label, textMessage)
        loadingOverlay.style.display = 'none';

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

    }
}

function checkPassword(message) {

    const div = password.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')
    
    if(message == 'Senha invalida!'){

        errorInput(message, label, textMessage)
        loadingOverlay.style.display = 'none';

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'
    }
}

function errorInput(messagem, label, textMessage){

    textMessage.innerText = messagem
    label.style.borderColor = 'red'
}

const eye_close = document.querySelectorAll('.bi-eye-slash')
const eye_open = document.querySelectorAll('.bi-eye')

const password_input = document.querySelectorAll('.password-input')
const inputs = document.querySelectorAll('.input-field');

///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
eye_close.forEach(button => {

    button.addEventListener('click', () => {
        
        eye_close.forEach(button => {
            button.style.display = 'none'
        })
        eye_open.forEach(button => {
            button.style.display = 'block'
        });
        password_input.forEach(input => {
            input.setAttribute('type', 'text');
        })
    })
  
})

eye_open.forEach(button => {

    button.addEventListener('click', () => {

        eye_close.forEach(button => {
            button.style.display = 'block'
        })
        eye_open.forEach(button => {
            button.style.display = 'none'
        });

        password_input.forEach(input => {
            input.setAttribute('type', 'password');
        })
    });
   
})
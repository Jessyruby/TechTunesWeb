const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (event) => {

    event.preventDefault()

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
            }
                
        })
        .catch(error => {
            console.error('Erro no login:', error.response.data);
            alert('Erro ao realizar login. Verifique suas credenciais.');
        });
    
})

function checkEmail(message) {
    
    const div = email.parentElement
    const label = div.parentElement
    const formItem = label.parentElement
    const textMessage = formItem.querySelector('a')

    if(message == 'ocorreu um erro durante a verificação do usuário existente!'){

        errorInput('Email invalido!', label, textMessage)

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

    } else {

        textMessage.innerText = ''
        label.style.borderColor = 'transparent'

    }
    
}

function errorInput(messagem, label, textMessage){

    textMessage.innerText = messagem
    label.style.borderColor = 'red'
}
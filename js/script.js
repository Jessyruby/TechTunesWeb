const eye_close = document.querySelectorAll('.bi-eye-slash')
const eye_open = document.querySelectorAll('.bi-eye')

const password_input = document.querySelectorAll('.password-input')
const inputs = document.querySelectorAll('.input-field');


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


document.getElementById('name').addEventListener('focus', () => {
    document.querySelector(".bi-person-circle").style.color = "#8125c3"
})

document.getElementById('name').addEventListener('blur', () => {
    document.querySelector(".bi-person-circle").style.color = "#a6a6a6"
})

document.getElementById('email').addEventListener('focus', () => {
    document.querySelector(".bi-envelope").style.color = "#8125c3"
})

document.getElementById('email').addEventListener('blur', () => {
    document.querySelector(".bi-envelope").style.color = "#a6a6a6"
})


function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

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

////////////////////////////////////////////////////////////////////


function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}


////////////////////////////////////////////////////////////////////

const productContainer = document.querySelectorAll('.product-container')

const bLeft = document.getElementById('bLeft')
const bRight = document.getElementById('bRight')

productContainer.forEach( (item) => {
    let containerDimensions = item.getBoundingClientRect()
    let containerWidth = containerDimensions.width

    bLeft.addEventListener('click', () => {
        item.scrollLeft -= containerWidth
    })

    bRight.addEventListener('click', () => {
        item.scrollLeft += containerWidth
    })

})

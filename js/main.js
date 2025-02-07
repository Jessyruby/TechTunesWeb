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
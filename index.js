const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

// CARRITO FUNCION

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

// Lista de todos los contenedores de productos

const productsList = document.querySelector('.container-items')

// Variable de arreglos de productos

let allProducts = []



productsList.addEventListener('click', e => {
    console.log(e.target.classList.contains('price'))
})
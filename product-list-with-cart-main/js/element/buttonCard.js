

import { listItems } from "./buildProducts.js"
import {updateCheckOut}  from "./updateCheckout.js"


function buttonCard() {
  const buttonAddToCart = document.querySelectorAll(".add-to-card")

  buttonAddToCart.forEach(button => {
    button.addEventListener("click", handeleClickFirst)

  })

}


function defaultButton() {
  return `<img src="./assets/images/icon-add-to-cart.svg" alt="add to cart"> Add to Cart`
}

function activeButton(counter) {
  return `
     <img src="./assets/images/icon-decrement-quantity.svg" class="decrement" alt="decrement counter">
    <span class="counter">${counter}</span>
    <img src="./assets/images/icon-increment-quantity.svg" class="increment" alt="increment counter">
  `}
function handeleClickFirst(e) {
  if (e.target.classList.contains("active") ) return
  const button = e.target
  const product_item = e.currentTarget.parentElement.parentElement
  const product_item_img = product_item.querySelector(".product-img")
  
  const product_id = product_item.dataset.id - 1
  const product_data = listItems[product_id]
  if(product_item_img) product_item_img.classList.add("active")
  product_data.count = 1
  e.target.innerHTML = activeButton(product_data.count)
  e.target.classList.add("active")
  const incrementBtn = e.target.querySelector(".increment")
  const decrementBtn = e.target.querySelector(".decrement")

  incrementBtn.addEventListener("click", incrementCounterBtn)
  decrementBtn.addEventListener("click", decrementCounterBtn)
  e.target.removeEventListener("click", handeleClickFirst)
      updateCheckOut(product_id )

}

function incrementCounterBtn(e) {
  e.stopPropagation()
  const product = e.currentTarget.parentElement.parentElement.parentElement
  const product_id = product.dataset.id - 1
  listItems[product_id].count += 1 
  e.target.parentElement.querySelector(".counter").textContent = listItems[product_id].count
    updateCheckOut(product_id )
}

function decrementCounterBtn(e) {
    e.stopPropagation()

   const product = e.target.parentElement.parentElement.parentElement
  const product_id = product.dataset.id - 1
  listItems[product_id].count = listItems[product_id].count - 1
  //decrement counter html
  e.target.parentElement.querySelector(".counter").textContent = listItems[product_id].count
  if(listItems[product_id].count == 0) {
      e.preventDefault()

    //remove active class and reset button
    const productImg = product.querySelector(".product-img")
    const btn = product.querySelector(".add-to-card")
    productImg.classList.remove("active")
     btn.classList.remove("active") 
    e.target.parentElement.innerHTML = defaultButton()
    btn.addEventListener("click", handeleClickFirst)
  }
        updateCheckOut(product_id )
}

export  {buttonCard ,defaultButton,handeleClickFirst,incrementCounterBtn,decrementCounterBtn}
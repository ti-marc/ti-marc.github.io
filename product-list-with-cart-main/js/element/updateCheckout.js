import { listItems } from "./buildProducts.js"
import {defaultButton,handeleClickFirst,incrementCounterBtn,decrementCounterBtn } from "./buttonCard.js"
const totalProduct = document.querySelector(`.cart-checkout .counter`)
const cartCheckoutLists = document.querySelector(".cart-checkout-items .cart-checkout-lists")

let countTotal = 0
let totalMonney = 0


function updateCheckOut(product) {
  const cartCheckoutEmpty = document.querySelector(`.cart-checkout-empty`)//.cart-checkout-empty
  const cartCheckoutItems = document.querySelector(`.cart-checkout-items`)//.cart-checkoutItems
  counterTotalProduts()
  if (countTotal > 0) {
    cartCheckoutEmpty.classList.remove("active")
    cartCheckoutItems.classList.add("active")
  } else {
    cartCheckoutEmpty.classList.add("active")
    cartCheckoutItems.classList.remove("active")
    cartCheckoutLists.innerHTML = ""
  }

  if (cartCheckoutItems.classList.contains("active")) {
    document.querySelector(`.cart-checkout-items .cart-checkout-total-price`).textContent = `$${totalMonney.toFixed(2)}`
    updateListItem(listItems[product])

  }

}
function createProduct(product) {
  const div = document.createElement("div")
  div.classList.add("cart-checkout-item")
  div.dataset.id = product.id

  const btn = document.createElement("img")
  btn.classList.add("cart-checkout-item-remove-item")
  btn.src = "./assets/images/icon-remove-item.svg"
  btn.alt = "remove item"
  btn.addEventListener("click", handleClickRemove)
  div.innerHTML = `
     <div class="cart-checkout-item-detail">
          <div class="cart-checkout-item-name">${product.name}</div>
          <div class="cart-checkout-item-detail-price"> 
          <div class="cart-checkout-item-quantity">${product.count}x</div> 
          <div class="cart-checkout-item-price">@ $${product.price}</div> 
                      <div class="cart-checkout-item-price-total">$${product.price}</div>
          </div>
  `
  div.querySelector(".cart-checkout-item-detail").parentNode.appendChild(btn)
  return div
}

function counterTotalProduts() {
  countTotal = 0
  totalMonney = 0
  for (let i = 0; i < listItems.length; i++) {
    countTotal += listItems[i].count
    totalMonney += listItems[i].count * listItems[i].price
  }
  totalProduct.textContent = `(${countTotal})`
}

function handleClickRemove(e) {
  const product_id = e.target.parentElement.dataset.id - 1
  listItems[product_id].count = 0
  updateCheckOut(product_id)

  //Remove active class and reset button
  const product = document.querySelector(".products [data-id='" + e.target.parentElement.dataset.id + "']")
  const btn = product.querySelector(".product-img .add-to-card")
  btn.querySelector(".decrement").removeEventListener("click", decrementCounterBtn)
  btn.querySelector(".increment").removeEventListener("click", incrementCounterBtn)
  btn.innerHTML = defaultButton()
  btn.addEventListener("click", handeleClickFirst)

  product.querySelector(".product-img").classList.remove("active")
  product.querySelector(".add-to-card").classList.remove("active")

}

function updateListItem(product) {
  const itemProduct = cartCheckoutLists.querySelector(`[data-id="${product.id}"]`)
  if (itemProduct) {
      if(product.count == 0 ){
        cartCheckoutLists.removeChild(itemProduct)
      }else {
        itemProduct.querySelector(".cart-checkout-item-quantity").textContent = `${product.count}x`
        itemProduct.querySelector(".cart-checkout-item-price-total").textContent = `$${product.count * product.price}`
      }

  } else {
    cartCheckoutLists.appendChild(createProduct(product))
  }

}
export { updateCheckOut, totalMonney }
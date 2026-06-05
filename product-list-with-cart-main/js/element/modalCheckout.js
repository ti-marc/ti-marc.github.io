

import {listItems,resetItems} from "./buildProducts.js"
import {totalMonney} from "./updateCheckout.js"
function btnCheckout(){
    const btnCheckout = document.querySelector(".cart-checkout-items .checkout-button")
    btnCheckout.addEventListener("click", handleClickCheckOut)
}
    
function moveTotop(){
   window.scrollTo({
  top: 0,
  behavior: "smooth"
});
}

function handleClickCheckOut(){
    moveTotop()
    const body = document.querySelector("body")

    body.innerHTML += `<div class="shadow-model">
			<div class="modal">
				<header class="modal-header">
					<div class="modal-confirmed">
						<div class="modal-confirmed-img">
							<img src="./assets/images/icon-order-confirmed.svg" alt="confirmed order">
						</div>
						<div class="modal-confirmed-text-title">
							Order Confirmed
						</div>
						<div class="modal-confirmed-text ">
							We hope you enjoy your food!
						</div>
					</div>
				</header>
					<div class='cart-checkout-lists'>
							${buildListItem()}
						<div class="cart-checkout-total">
						<div class="cart-checkout-total-title">Order total</div>
						<div class="cart-checkout-total-price">0</div>
					</div>
                    <button class="checkout-button">Start New Order</button>

					</div>
                </div>
	
                    `

                 const btnCheckout = document.querySelector(".modal .checkout-button")
                btnCheckout.addEventListener("click",(e)=> {
					e.target.parentNode.parentNode.parentNode.remove()
					resetItems()
				})
				document.querySelector(".modal .cart-checkout-total-price").textContent = `$${totalMonney.toFixed(2)}`
} 

function createListProduct(){
    listItems.forEach((item) =>{
        return `
        	<div class="cart-checkout-item-detail">
							<img src="${item.img}" class="cart-checkout-item-thumbnail" alt="">
							<div>
								<div class="cart-checkout-item-name">nom du produit</div>
								<div class="cart-checkout-item-detail-price">
									<div class="cart-checkout-item-quantity">1x</div>
									<div class="cart-checkout-item-price">@ $10</div>
								</div>
							</div>
							<div class="price-item">
							$10

							</div>

						</div>
        `    
    })
}

function buildListItem(){
	const listProductFormatedHtml = []
    for(let i = 0 ; i < listItems.length ; i++){
		if(listItems[i].count === 0){
			continue
		}
		listProductFormatedHtml.push(`
				<div class="cart-checkout-item-detail">
							<img src="${listItems[i].image_thumbnail}" class="cart-checkout-item-thumbnail" alt="${listItems[i].name}">
							<div>
								<div class="cart-checkout-item-name">${listItems[i].name}</div>
								<div class="cart-checkout-item-detail-price">
									<div class="cart-checkout-item-quantity">${listItems[i].count}x</div>
									<div class="cart-checkout-item-price">@ $${listItems[i].price}</div>
								</div>
							</div>
							<div class="price-item">
								$${listItems[i].price * listItems[i].count}
							</div>
						</div>
			`)
	}
	return listProductFormatedHtml
}
export {btnCheckout}
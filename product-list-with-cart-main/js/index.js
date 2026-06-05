import { buildProducts, listItems } from "./element/buildProducts.js"
import {buttonCard}  from "./element/buttonCard.js"
import {btnCheckout}  from "./element/modalCheckout.js"
async function main(){
  await buildProducts()
   btnCheckout()
   buttonCard(listItems)
}

main()
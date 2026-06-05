const listItems = []

async function buildProducts() {
  const dessertList = document.querySelector("#products")

  try {
    const data = await fetch("./../../data.json")
    const desserts_data = await data.json()

    for (let i = 0; i < desserts_data.length; i++) {
      const idItem = i + 1
      listItems.push({
        id: idItem,
        image_thumbnail: desserts_data[i].image.thumbnail,
        count: 0,
        price: desserts_data[i].price,
        name: desserts_data[i].name
      }

      )
      const productList = document.createElement("div")
      productList.classList.add("product")
      const element = `<div class="product" data-id="${idItem}">
          <div class="product-img"> 
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="${desserts_data[i].image.desktop}"
  >

  <source
    media="(min-width: 768px)"
    srcset="${desserts_data[i].image.tablet}"
  >

  <img
    src="${desserts_data[i].image.mobile}"
    alt="${desserts_data[i].name}"
    class="image"
  >
</picture>               
<button class="add-to-card"> <img src="./assets//images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
        </div>
        <div class="product-category">${desserts_data[i].category}</div>
          <div class="product-name"> ${desserts_data[i].name}</div>
          <div class="product-price">$${parseFloat(desserts_data[i].price).toFixed(2)}</div>
       </div>
     `
      productList.innerHTML = element
      dessertList.appendChild(productList)
    }

  } catch (e) {

    console.log(e)
  }


}
function resetItems() {
  document.querySelectorAll(".product").forEach((item) => {
    item.remove()
  })
  listItems.forEach((item) => {
    item.count = 0
  })
  buildProducts()
  document.querySelector(".cart-checkout-empty").classList.add("active")
  document.querySelector(".cart-checkout-items").classList.remove("active")
  document.querySelector(".cart-checkout-title span").textContent = `(0)`
}

export { listItems, buildProducts ,resetItems}

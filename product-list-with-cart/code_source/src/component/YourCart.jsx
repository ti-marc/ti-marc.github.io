

const  YourCart = (props) =>  {
    let totalArticle = 0
    let totalPriceOrder = 0;
    const contentHtml = props.listProduc.length == 0 ? (
        <> 
            <img className="youCart-img_empty" src="images/illustration-empty-cart.svg" alt="" />
            <p className="youCart-p-empty">You added items will apear here</p>
        </>
    ) :  props.listProduc.map((produc,index) =>{
        totalArticle += produc.numberItems 
        totalPriceOrder += produc.price * produc.numberItems
        return (
            <div key={index} className="container-card">
                <div className="container-card-title">{produc.name}</div>
                <div className="flex-produc">
                    <div className="container-card-quantity">{produc.numberItems}x </div> 
                    <div className="container-card-price-one">@ ${produc.price}</div>
                    <div className="container-card-price-total">${produc.price * produc.numberItems}</div>
                    <img  className="btn-container-card-btn-remove" src="images/icon-remove-item.svg" alt="remove card" onClick={() =>{
                        
                     props.removeOneProduc(produc.name)
                    
                    }} />
                </div>
                <hr className="seperator" />
            </div>
            
        )
    })
    const totaLproduct = totalPriceOrder > 0 ? (
        <>
        <div className="container-footer" >
            <div className="container-footer-order-total">
                <div className="container-order-total-title">Order Total</div>
                <div className="container-order-total-price">${totalPriceOrder}</div>
            </div>
            <div className="container-footer-bio">
                <img src="images/icon-carbon-neutral.svg" alt="" />
                <p>This is a <span style={{fontWeight:"bold"}}>carbon-neutral </span> delivery</p>
            </div>
              <button className="btn-form" onClick={props.handeleOrderPayement}>Confirm Order</button>  
        </div>   
        </>
     
    ) : null;

  
    return (
        <div className="yourCart">
        <h2 className="yourCart-title">Your Cart({totalArticle})</h2>
          {contentHtml}
          {totaLproduct}
        </div>
    )
  
    
    
}

export {YourCart}
const BtnCard = (props) =>{
    const numberItems = props.numberProduct()
    if(numberItems == 0)
    {
        return (
            <button onClick={props.btnClickAddToCart} className="btn btn-add-to-card">
                   <img  src={"images/icon-add-to-cart.svg"} alt="add to cart" /> Add to Cart
                <div  className="filler"></div>
    
                    </button>) 
    }else 
    {
        return  (
            <div  className="btn btn-active">
                    <button className="btn-active-decrement image-decrement" onClick={props.changeStateProduct.d} ></button>
                    <div className="btn-active-number">{numberItems}</div>
                    <button className="btn-active-increment" onClick={props.changeStateProduct.i}  ><img src="images/icon-increment-quantity.svg" alt="" /></button>

             </div>
        )

    }
} 
export default BtnCard
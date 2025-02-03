import { Component } from "react";
import  BtnCard  from "./BtnCard";

class CardItem extends Component{
    getNumberItemsCard = () =>{
        const product = this.props.listProduct.find(product => product.name === this.props.name);
        return product ? product.numberItems : 0;
    }
     btnClickAddToCart = (e) => {
        const filter = e.target.querySelector(".filler")
        filter.classList.add("active")
        setTimeout(()=>{
            this.props.updateList({
                name:this.props.name,
                price:this.props.price,
                numberItems:1,
                thumbnail:this.props.thumbnail
               })
        },200)
    }
    
    incrementNumberProduct = () => {
           this.props.updateList({
            name:this.props.name,
            price:this.props.price,
            numberItems:this.getNumberItemsCard() + 1 ,
           })

    }
    decrementNumberProduct = () => {
        const currentNumber = this.getNumberItemsCard();
        if (currentNumber > 0) {
          this.props.updateList({
            name: this.props.name,
            price: this.props.price,
            numberItems: currentNumber - 1,
          });
          if (currentNumber - 1 === 0) {
            this.props.removeOneProduc(this.props.name);
          }
        }
      };
   
  
    render(){
        const {category,name,price} = this.props
        const {mobile} = this.props.img_path
        const img =  this.getNumberItemsCard() == 0 ?   (<img   alt={name} src={mobile} className="card-img" />) :   (<img  alt={name} src={mobile} className="card-img active" />)     
        return (
            <div className="card">
                <div className="card-img-container">
                    {img}
                     <BtnCard changeStateProduct={{d:this.decrementNumberProduct,i:this.incrementNumberProduct}} numberProduct={ this.getNumberItemsCard} btnClickAddToCart={this.btnClickAddToCart} />
                </div>
                <div className="cart-category">{category}</div>
                <div className="cart-title">{name}</div>
                <div className="cart-price">${price} </div>
            </div>
        )
    }
}

export {CardItem}
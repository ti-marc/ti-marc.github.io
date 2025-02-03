import { Component } from 'react'
import './App.css'
import { CardItem } from './component/CardItem';
import data from "./data/data.json"
import { YourCart } from './component/YourCart';
import Modal from './component/Modal';

class  App extends Component {
  state ={
    listProductsData:data,
    listProducCard:[],
    confirmModal:false
    }
 

    removeProducUpdate = (name= null) =>
      {
    let newList =[];
      this.state.listProducCard.map((produc,index) =>{
        if(produc.numberItems > 0 && name == null){
          newList.push(produc)
        }else if(name != produc.name) {
          newList.push(produc)
        }
      })

      this.setState({listProducCard:newList})
    }
  
    updateListProducts = (updateList) =>{
        if(this.state.listProducCard.length == 0 ){
          this.setState({
            listProducCard:[updateList],
            totalNumberItem:updateList.numberItems
          })
        }
        else{
          //update list 
          let new_listing = this.state.listProducCard;
          let totalPrice = 0;
          let totalItems = 0;

          const searchName = this.state.listProducCard.find(produc => produc.name == updateList.name )
          if(searchName == undefined){
            new_listing.push(updateList)
          }else{
            new_listing.map((produc,index) =>{
                if(produc.name == updateList.name){
                  new_listing[index].numberItems = updateList.numberItems
                }
            })
          }
          this.setState({
            listProducCard:new_listing
          })
          this.removeProducUpdate();

        }
    }
    handeleOrderPayement = () =>{
      this.setState({confirmModal:true})
    }
    handeleResetOrder = () =>{
      this.setState({
        listProducCard:[],
        confirmModal:false
        
      })
    }
render(){

  const listProductsData = this.state.listProductsData
  const modalConfirm = this.state.confirmModal ? ( <Modal handeleResetOrder={this.handeleResetOrder} listProducCard={this.state.listProducCard}/>) : null
  return (
    <>

      <div className='container'>
      <div className="container-app">
      <h1 className='title'>Desserts</h1>

        <div className="cards">
          {
              listProductsData.map((x,index) => (<CardItem   removeOneProduc={this.removeProducUpdate} listProduct={this.state.listProducCard} updateList={this.updateListProducts} key={index} category={x.category} name={x.name}  img_path={x.image} price={x.price} thumbnail={x.image.thumbnail} /> )  )
          }
        </div>
        <YourCart handeleOrderPayement={this.handeleOrderPayement}  removeOneProduc={this.removeProducUpdate} listProduc={this.state.listProducCard} />     
      </div>
      </div>
      {modalConfirm}    
          <footer>
        <a href="https://www.frontendmentor.io/home">Challenge by Frontend Mentor</a>. Coded by <a href='https://github.com/ti-marc'>ti-marc</a>.
        </footer>
       

    </>
  )


}
}
export default App




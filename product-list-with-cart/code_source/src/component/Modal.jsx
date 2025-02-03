import {createPortal } from "react-dom";

const Modal = (props) =>{
    let totalPriceCard = 0;
    return createPortal(
        <div className="modal">
            <div className="modal-container">
                <img src="/images/icon-order-confirmed.svg" alt="" className="modal-container-img-confirmed" />
                <h2 className="modal-container-title">Order Confirmed</h2>
                <p className="modal-container-enjoy">We hope you enjoy your food</p>
                <div className="modal-container-title-list-items">
                    {
                        props.listProducCard.map((produc) => {
                            totalPriceCard += produc.price * produc.numberItems
                            return (
                                <>
                                <div className="modal-container-title-list-items-item">
                                    <div className="modal-container-title-list-items-item-img"><img src={produc.thumbnail} alt="" /></div>
                                    <div className="modal-container-title-list-items-item-content">
                                            <div className="modal-container-title-list-items-item-content-title">{produc.name}</div>
                                            <div className="modal-container-title-list-items-item-content-detail">
                                                <div className="modal-container-title-list-items-item-content-quantity">{produc.numberItems}x</div>   
                                                <div className="modal-container-title-list-items-item-content-price">@ ${produc.price}</div>      
                                            </div>
                                            <div className="modal-container-title-list-items-item-total-price-product">${produc.numberItems * produc.price}</div>
                                    </div>
                                    <div className="modal-container-title-list-items-item-price-total"></div>
                                </div>
                             <hr className="modal-container-title-list-items-item-hr" />
                                </>
                       
                            )
                        })
                    }
                    <div className="modal-container-total-order">
                        <div>Order Total</div>
                        <div className="modal-container-total-order-total-price">${totalPriceCard}</div>
                    </div>
                   
                </div>    
                <button onClick={props.handeleResetOrder} className="btn-orange">Start New Order</button>
            </div>    
        </div>
    ,document.getElementById("pop"))
}
export default Modal

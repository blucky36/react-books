import React from 'react'
import CartItem from "./cartItem.js"

const Cart = (props) => {
  return (
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {props.items.map((e)=><CartItem product = {e.product.title} price = {e.product.price} quantity = {1}/>)}
      </div>
    </div>
  )
}

export default Cart

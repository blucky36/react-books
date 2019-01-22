import React from 'react'
import CartItem from "./cartItem.js"
import Total from "./total.js"

const Cart = (props) => {
  const cartitemformattoobject = (items) => {
    let titleArr = []
    return items.reduce((a,e)=>{
      if(titleArr.includes(e.product.title)){
        let index = titleArr.indexOf(e.product.title)
        a[index].quantity++
      }else{
        let copy = {...e.product,quantity:1}
        titleArr.push(e.product.title)
        a.push(copy)
      }
      return a
    },[])
  }

  const transfertojsx = (newCartArr) => {
    return newCartArr.map((e,i)=><CartItem key = {i} product = {e.title} price = {e.price} quantity={e.quantity}/>)
  }

  const oi = cartitemformattoobject(props.items)

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
        {transfertojsx(oi)}
      </div>
      <Total items = {oi}/>
    </div>
  )
}

export default Cart

import React from 'react'

const formatValues = (p) => {
  return `$${p.toString()}.00`
}

const CartItem = (props) => {
  return (
    <div className = "list-group-item">
      <div className="collection-item">
        <div className="row">
          <div className="col-md-8">{props.product}</div>
          <div className="col-md-2">{formatValues(props.price)}</div>
          <div className="col-md-2">{props.quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

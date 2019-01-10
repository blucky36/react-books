import React from "react"

const formatValue = (cil) => {
  let total = 0
  cil.forEach((item)=>total+=item.product.price)
  return `$${total}.00`
}

const Total = (props) => {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <span>{`Total Price in Cart: ${formatValue(props.items)}`}</span>
      </div>
      <div className = "col-2"></div>
    </div>
  )
}

export default Total

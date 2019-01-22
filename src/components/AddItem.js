import React, {Component} from "react"

class AddItem extends Component {

  state = {quantity:1,productID:1}

  onSubmit = (e) => {
    e.preventDefault()
    const {quantity, productID} = this.state
    const product = this.props.products.find(product => product.id === productID)
    this.props.onAddItem(product)
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: + e.target.value,
    })
  }

  render() {
    return (
      <div className = "row">
        <div className = "col-md-3"></div>
        <div className = "col-md-6">
          <div className = "form-group">
            <form onSubmit={this.onSubmit}>
              <label>Book:</label>
              <select id = "productIdd" className = "form-control" name="productID" onChange={this.onChange}>
                {this.props.products.map((product, i) => <option key={i} value={product.id}>{product.title}</option>)}
              </select>
              <input type="submit" className = "btn btn-success" value="Add to Cart" />
            </form>
          </div>
        </div>
        <div className = "col-md-3"></div>
      </div>
    )
  }
}

export default AddItem

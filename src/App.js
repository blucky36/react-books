import React, { Component } from "react"
import AllBooks from "./components/allBooks.js"
import AddItem from "./components/AddItem.js"
import Total from "./components/total.js"
import Cart from "./components/cart.js"
import productsArray from "./productsArray.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { NyanScrollBar } from "react-nyan-stroller"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {apiBooks:[],cartItems:[],products:productsArray,sortAs:"id"}
  }

  async componentDidMount(){
    const apiBooks = await fetch(`${process.env.REACT_APP_API_URL}/api/books`).then((data)=>data.json())
    this.setState({...this.state,apiBooks})
  }

  onAddItem = ({product}) => {
    const nextID = this.state.cartItems.reduce((a,i) => {
      return Math.max(a, i.id)
    }, 0) + 1
    const newItem = {product,id:nextID}
    const newItems = [...this.state.cartItems, newItem]

    this.setState({
      ...this.state,
      cartItems: newItems
    })
  }

  onSortBy = (apiBooks,sortAs) => {
    this.setState({...this.state,apiBooks:apiBooks,sortAs:sortAs})
  }

  onCritChange = (e) => {
    this.setState({...this.state,sortAs:e.target.value})
  }

  onCritSubmit = (e) => {
    e.preventDefault()
    let value = this.state.sortAs
    console.log(this.state.sortAs)
    console.log(this.state.apiBooks);
    let byTitle = this.state.apiBooks.slice(0)
    let byAuthor = this.state.apiBooks.slice(0)
    let byId = this.state.apiBooks.slice(0)
    byId.sort((a,b)=>{
      let x = a.id
      let y = b.id
      return x < y ? -1 : x > y ? 1 : 0
    })
    byTitle.sort((a,b) => {
      let x = a.title.toLowerCase()
      let y = b.title.toLowerCase()
      return x < y ? -1 : x > y ? 1 : 0
    })
    byAuthor.sort((a,b) => {
      let x = a.author.toLowerCase()
      let y = b.author.toLowerCase()
      return x < y ? -1 : x > y ? 1 : 0
    })
    if(value === "title"){
      this.onSortBy(byTitle,"title")
    }
    if(value === "author"){
      this.onSortBy(byAuthor,"author")
    }
    if(value === "id"){
      this.onSortBy(byId,"id")
    }
    console.log("by Author",byAuthor)
    console.log("by title",byTitle)
    console.log("by ID", byId)
  }

  onSearch(bookId){
    if(isNaN(Number(bookId)))return
    let found = this.state.apiBooks.find((book)=> Number(bookId) === book.id)
    let index = this.state.apiBooks.indexOf(found)
    this.setState({...this.state, apiBooks:[found,...this.state.apiBooks.slice(0,index),...this.state.apiBooks.slice(index+1)]})
    console.log(found)
  }

  render() {
    return (
      <div className="App">
          <main className = "container">
            <h1>Blake's Book Store</h1>
            <div className = "row">
              <div className = "col-md-3">
                <form onSubmit = {(e)=>{e.preventDefault();this.onSearch(document.querySelector("#searchbar").value)}}>
                  <input id = "searchbar" className = "form-control" placeholder = "search for book by bookId 1-8"/>
                  <input type="submit" value = "search" className = "btn btn-success"/>
                </form>
              </div>
              <div className = "col-md-6">
                <div className = "form-group">
                  <form onSubmit = {this.onCritSubmit}>
                    <label>Book:</label>
                    <select id = "productIddd" className = "form-control" name="productID" onChange = {this.onCritChange}>
                      <option value="id">Sort By Id</option>
                      <option value="title">Sort By Book Title</option>
                      <option value="author">Sort By Author</option>
                    </select>
                    <input type="submit" className = "btn btn-success" value="Change Book Order" />
                  </form>
                </div>
              </div>
              <div className = "col-md-3"></div>
            </div>
            <AllBooks transferState={this.state}/>
            <h1>My Shopping Cart</h1>
            <Cart items={this.state.cartItems}/>
            <Total items = {this.state.cartItems}/>
            <AddItem products={this.state.products} onAddItem = {this.onAddItem}/>
          </main>
        <NyanScrollBar draggable targetAxis="horizontal" />
        <NyanScrollBar draggable targetAxis="vertical" />
        <NyanScrollBar draggable oppositePosition targetAxis="horizontal" />
        <NyanScrollBar draggable oppositePosition targetAxis="vertical" />
      </div>
    )
  }
}

export default App

// import React, {Component} from "react"
//
//I tried and failed to asynch data to an extension of component
//
// class SortBy extends Component {
//   constructor(props){
//     super(props)
//     console.log(props);
//     setTimeout(()=>{
//       console.log(this.apiBooks)
//     }, 3000)
//     this.state = {
//       apiBooks:props.apiBooks,
//       val:props.val,
//       onSortBy:props.onSortBy
//     }
//   }
//   onCritSubmit = (e) => {
//     e.preventDefault()
//     let value = this.state.val
//     console.log(this.state.val)
//     console.log(this.state.apiBooks);
//     let byTitle = this.state.apiBooks.slice(0)
//     let byAuthor = this.state.apiBooks.slice(0)
//     let byId = this.state.apiBooks.slice(0)
//     byId.sort((a,b)=>{
//       let x = a.id
//       let y = b.id
//       return x < y ? -1 : x > y ? 1 : 0
//     })
//     byTitle.sort((a,b) => {
//       let x = a.title.toLowerCase()
//       let y = b.title.toLowerCase()
//       return x < y ? -1 : x > y ? 1 : 0
//     })
//     byAuthor.sort((a,b) => {
//       let x = a.author.toLowerCase()
//       let y = b.author.toLowerCase()
//       return x < y ? -1 : x > y ? 1 : 0
//     })
//     // if(value === "title"){
//     //   props.onSortBy(byTitle,"title")
//     // }
//     // if(value === "author"){
//     //   props.onSortBy(byAuthor,"author")
//     // }
//     // if(value === "id"){
//     //   props.onSortBy(byId,"id")
//     // }
//     console.log("by Author",byAuthor)
//     console.log("by title",byTitle)
//     console.log("by ID", byId)
//   }
//
//   onChange = (e) => {
//     this.setState({
//       ...this.state,
//       [e.target.name]: + e.target.value,
//     })
//   }
//
//   render() {
//     return (
//       <div className = "row">
//         <div className = "col-md-3"></div>
//         <div className = "col-md-6">
//           <div className = "form-group">
//             <form onSubmit = {this.onSubmit}>
//               <label>Book:</label>
//               <select id = "productIddd" className = "form-control" name="productID" onChange = {this.onChange}>
//                 <option value="id">Sort By Id</option>
//                 <option value="title">Sort By Book Title</option>
//                 <option value="author">Sort By Author</option>
//               </select>
//               <input type="submit" className = "btn btn-success" value="Change Book Order" />
//             </form>
//           </div>
//         </div>
//         <div className = "col-md-3"></div>
//       </div>
//     )
//   }
// }
//
// export default SortBy

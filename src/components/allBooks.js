import React from "react"
import Book from "./book.js"

const AllBooks = (props) => {
  return props.transferState.apiBooks.map((book,i)=>{
    return (
      <main className = "row">
        <Book index = {i} book = {book}/>
      </main>
    )
  })
}

export default AllBooks

import React from "react"
import Book from "./book.js"

const AllBooks = (props) => {
  return props.apiBooks.map((book,i)=>{
    return (
      <main className = "row">
        <Book key = {i} index = {i} book = {book}/>
      </main>
    )
  })
}

export default AllBooks

import React from "react"

const Book = (props) => {
  const {author,description,id,inCart,pages,price,published,publisher,subtitle,title,website} = props.book
  // const inCart =  ? true : false
  return (
    <div><h3>Book Id: {id}</h3><h4>Title: {title} : {subtitle}</h4><h5>Author: {author} | Pages: {pages} | Price: {`$${price}.00`}</h5></div>
  )
}

export default Book

import React from 'react'

function BookDisplay(props) {
  const addBook = () => {
    console.log('added book');

  }

  return (
    <div className="book">
      Book {props.id}
      <h3>{props.title}</h3>
      <h4>{props.author} | published date: {props.date}</h4>

      {/* <p>{props.description}</p> */}
      <img src={props.img} />
      <button onClick={addBook}>Add</button>
    </div>
  )
}

export default BookDisplay

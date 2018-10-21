import React from 'react'

function BookDisplay(props) {
  const addBook = () => {
    console.log('added book');

  }

  return (
    <div className="book">
      {/* Book {props.id} */}
      <div className="book-title">
        <h3>{props.title}</h3>
        <h4>{props.author} </h4>
        <h4>published date: {props.date}</h4>
        {/* <p>{props.description}</p> */}

      </div>

      <div className="img-btn">
        <img src={props.img} />
        <button className="add-btn" onClick={addBook}>Add</button>
      </div>

    </div>
  )
}

export default BookDisplay

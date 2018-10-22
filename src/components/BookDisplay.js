import React from 'react'

function BookDisplay(props) {
  const addBook = () => {
    props.addBook(props.book);
  }

  return (
    <div className="book">
      {/* Book {props.id} */}
      <div className="book-title">
        <h3>{props.title}</h3>
        {props.author === 'no' ?
          <h4>Not Found Author </h4> :
          <h4>By {props.author} </h4>}
        {/* <p>{props.description}</p> */}
      </div>

      <div className="img-btn">
        <img src={props.img === 'no' ? 'http://www.virtualblueridge.com/wp-content/uploads/image-not-found.png' : props.img} alt={props.title + "image"} />
        <button className="add-btn" onClick={addBook}>Add</button>
        <h4>published on {props.date}</h4>
      </div>

    </div>
  )
}

export default BookDisplay

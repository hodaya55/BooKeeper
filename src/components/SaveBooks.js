import React from 'react'

function SaveBooks(props) {
  return (
    <React.Fragment>
      {/* <div className="save-area"> */}
      <h2>
        save books area
      </h2>
      <div className="book-save-list-result">
        {props.books.map(b =>
          <div className="book" key={b.id}>
            <div className="book-title">
              <h3>{b.title}</h3>
              {b.author === 'no' ?
                <h4>Not Found Author </h4> :
                <h4>By {b.author} </h4>}
            </div>
            <div className="img-btn">
              <img src={b.img} alt={b.title + "image"} />
              <h4>published on {b.date}</h4>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </React.Fragment>
  )
}

export default SaveBooks

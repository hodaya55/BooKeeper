import React, { Component } from 'react'
import BookDisplay from './BookDisplay'


export default class BookListResult extends Component {
  render() {
    return (
      <div className="book-list-result">
        BookListResult
        {this.props.booksResult.length > 0 ?
          "There is books" && this.props.booksResult.map(book => <BookDisplay key={book.id} {...book} />)
          : "Nothing Found."}
      </div>
    )
  }
}

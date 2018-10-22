import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    input: '',
  }

  onChangeInput = (e) => {
    this.setState({ input: e.target.value });
  }

  onSearchBtn = () => {
    // the string from the serach input
    console.log(this.state.input);
    // alert(this.state.input);
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.input}`)
      .then(res => res.json())
      .then(books => {
        // console.log(books);
        return books.items.map(b => {
          const bookInfo = {
            author: b.volumeInfo.authors ? b.volumeInfo.authors[0] : 'no',
            date: b.volumeInfo.publishedDate,
            title: b.volumeInfo.title,
            img: b.volumeInfo.imageLinks ? b.volumeInfo.imageLinks.smallThumbnail : 'no',
            bigImg: b.volumeInfo.imageLinks ? b.volumeInfo.imageLinks.thumbnail : 'no',
            description: b.volumeInfo.description,
            id: b.id
          }
          return bookInfo;
        });
      })
      .then(booksInfo => {
        this.props.updateSerachResult(booksInfo)
      })
      .catch(err => console.log(err))


    this.props.updateSerachResult(this.state.input);
    this.setState({ input: '' }); //clear the search string after search
  }

  // in order to allow search by Enter, not only by Click
  onKey = (e) => {
    if (e.key === 'Enter') {
      this.onSearchBtn();
    }
  }

  render() {
    return (
      <div className="serach-book-bar">
        <input className="input-serach" placeholder="Type a book..." value={this.state.input} onChange={this.onChangeInput} onKeyPress={this.onKey} />
        <input className="btn-serach" type="button" value="Search" onClick={this.onSearchBtn} />
      </div>
    )
  }
}

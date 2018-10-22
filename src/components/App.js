import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BookListResult from './BookListResult'
import SaveBooks from './SaveBooks'
class App extends Component {
  constructor() {
    super();
    this.state = {
      booksResult: [],
      addedBooks: [],
    }
  }

  updateSerachResult = (result) => {
    this.setState({ booksResult: result });
    console.table(result);
  }

  addBook = (book) => {
    if (this.state.addedBooks.includes(book)) {
      alert('The book already in your saves books.')
      return;
    }

    this.setState({
      addedBooks: [...this.state.addedBooks, book]
    })
    console.log('added book');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Book
        </header>
        <SearchBar updateSerachResult={this.updateSerachResult} />
        {this.state.booksResult.length > 0 && <BookListResult booksResult={this.state.booksResult} addBook={this.addBook} />}
        <SaveBooks books={this.state.addedBooks} />
      </div>
    );
  }
}

export default App;

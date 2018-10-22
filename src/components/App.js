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
      alert('The book is already in your saves books.')
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
        <div className="fixed-serach">
          <header className="App-header">
            The Library Books
        </header>
          <SearchBar updateSerachResult={this.updateSerachResult} />
        </div>
        {this.state.booksResult.length > 0 && <BookListResult booksResult={this.state.booksResult} addBook={this.addBook} />}
        {this.state.addedBooks.length > 0 && <SaveBooks books={this.state.addedBooks} />}
      </div>
    );
  }
}

export default App;

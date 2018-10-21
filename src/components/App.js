import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BookListResult from './BookListResult'
class App extends Component {
  constructor() {
    super();
    this.state = {
      booksResult: []
    }
  }

  updateSerachResult = (result) => {
    this.setState({ booksResult: result });
    console.table(result);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Book
        </header>
        <SearchBar updateSerachResult={this.updateSerachResult} />
        {this.state.booksResult.length > 0 && <BookListResult booksResult={this.state.booksResult} />}
      </div>
    );
  }
}

export default App;

import './App.css';

import React, { Component } from 'react';

import Book from './Book';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      books: [
        { title: 'first title', author: 'first author' },
        { title: 'second title', author: 'second author' },
        { title: 'third title', author: 'third author' },
      ],
      title: '',
      author: ''
    }

    this.increaseCount = this.increaseCount.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 })
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newBook = {
      title: this.state.title,
      author: this.state.author
    }
    this.setState({
      books: [...this.state.books, newBook ],
      title: '',
      author: ''
    })
  }

  render() {
    return(
      <div>
        <h1>Review</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
        {
          this.state.books.map((book) => {
            return(
              <Book title={book.title} author={book.author} />
            )
          })
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title' />
          <input id='title' type='text' value={this.state.title} onChange={this.handleChange} />
          <label htmlFor='author' />
          <input id='author' type='text' value={this.state.author} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App;

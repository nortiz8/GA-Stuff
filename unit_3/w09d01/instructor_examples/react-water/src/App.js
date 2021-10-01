import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Location from './components/Location'
import Menu from './components/Menu.js'
import Navigation from './components/Navigation.js'

class App extends React.Component {
  render () {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/locations">Locations</Link>
        </nav>
        <div className="container">
          <Route path="/" exact component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/locations" component={Location} />
        </div>
      </Router>
    )
  }
}

export default App

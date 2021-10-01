import React from 'react'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notices : []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside />
          <Main
            notices={this.state.notices}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App

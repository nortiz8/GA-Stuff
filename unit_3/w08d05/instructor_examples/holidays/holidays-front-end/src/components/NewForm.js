import axios from 'axios';
import React from 'react';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

class NewForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
  }

  async handleSubmit (event) {
    event.preventDefault()
    const response = await axios.post(`${baseURL}/holidays`, { name: this.state.name })
    this.setState({ name: '' })
    this.props.handleAddHoliday(response.data)
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a holiday"/>
        <input type="submit" value="Add a Reason to Celebrate"/>
      </form>
    )
  }
}

export default NewForm

import React, { Component } from 'react';
import axios from 'axios';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL
    const response = await axios.post(`${baseURL}/holidays`, {name: this.state.name})
    this.setState({
      name: ''
    })
    this.props.handleAddHoliday(response.data)
  }

  handleChange(event) {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="submit" value="Add a reason to Celebrate" />
      </form>
    )
  }
}

export default NewForm;
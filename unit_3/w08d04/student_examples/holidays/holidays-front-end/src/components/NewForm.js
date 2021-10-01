import React, { Component } from 'react';
import Axios from 'axios';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
    // this.setState({
    //   [event.currentTarget.name]: event.currentTarget.value
    // });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await Axios.post(`${baseURL}/holidays`, {
      name: this.state.name
    });
    this.setState({
      name: ''
    });
    this.props.handleAddHoliday(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name' />
        <input
          type='text'
          id='name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='add a holiday'
        />
        <input type='submit' value='Add a Reason to Celebrate' />
      </form>
    );
  }
}

export default NewForm;

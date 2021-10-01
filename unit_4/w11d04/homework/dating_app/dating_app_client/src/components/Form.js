import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      age: '',
      starsign: '',
      ltl: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/users', {
      name: this.state.name,
      img: this.state.img,
      age: this.state.age,
      starsign: this.state.starsign,
      ltl: this.state.ltl
    });
    console.log(response);
    this.setState({
      name: '',
      img: '',
      age: '',
      starsign: '',
      ltl: false
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Dater!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' />
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={this.handleChange}
          />
          <label htmlFor='img' />
          <input
            type='text'
            name='img'
            value={this.state.img}
            placeholder='image'
            onChange={this.handleChange}
          />
          <label htmlFor='age' />
          <input
            type='text'
            name='age'
            value={this.state.age}
            placeholder='age'
            onChange={this.handleChange}
          />
          <label htmlFor='starsign' />
          <input
            type='text'
            name='starsign'
            value={this.state.starsign}
            placeholder='starsign'
            onChange={this.handleChange}
          />
          <label>Loves to laugh?</label>
          <input
            type='checkbox'
            name='ltl'
            value={this.state.ltl}
            onChange={this.handleChange}
          />
          <input type='submit' value='Add Dater' />
        </form>
      </div>
    );
  }
}

export default Form;

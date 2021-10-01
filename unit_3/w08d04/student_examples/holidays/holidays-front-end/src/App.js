import React, { Component } from 'react';
import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';
import axios from 'axios';
import NewForm from './components/NewForm';
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = process.env.REACT_APP_BASEURL;

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

console.log('current base URL:', baseURL);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: []
    };
    this.getHolidays = this.getHolidays.bind(this);
    this.handleAddHoliday = this.handleAddHoliday.bind(this);
  }

  async getHolidays() {
    const response = await axios(`${baseURL}/holidays`);
    const data = response.data;
    this.setState({
      holidays: data
    });
  }

  componentDidMount() {
    this.getHolidays();
  }

  handleAddHoliday(holiday) {
    const copyHolidays = [...this.state.holidays];
    copyHolidays.unshift(holiday);
    this.setState({
      holidays: copyHolidays
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Holidays! Celebrate!</h1>
        <NewForm baseURL={baseURL} handleAddHoliday={this.handleAddHoliday} />
        <table>
          <tbody>
            {this.state.holidays.map(holiday => {
              return (
                <tr key={holiday._id}>
                  <td>{holiday.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

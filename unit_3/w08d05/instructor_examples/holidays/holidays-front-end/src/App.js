import axios from "axios";
import React from "react";
import NewForm from "./components/NewForm.js";
import Show from "./components/Show";
import ballons from "./images/two-balloon-icons-68911.png";
import pencil from "./images/simpleiconDOTcom-pen-15-64x64.png";
import "./css/index.css";
import "./css/normalize.css";
import "./css/skeleton.css";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: [],
      isHolidaySet: false,
      holiday: {}
    };

    this.getHolidays = this.getHolidays.bind(this);
    this.handleAddHoliday = this.handleAddHoliday.bind(this);
    this.deleteHoliday = this.deleteHoliday.bind(this);
    this.toggleCelebrated = this.toggleCelebrated.bind(this);
  }

  componentDidMount() {
    this.getHolidays();
  }

  async getHolidays() {
    const response = await axios.get(`${baseURL}/holidays`);
    const holidays = response.data;

    this.setState({ holidays: holidays });
  }

  handleAddHoliday(holiday) {
    this.setState({
      holidays: [...this.state.holidays, holiday]
    });
  }

  async deleteHoliday(id) {
    await axios.delete(`${baseURL}/holidays/${id}`);

    const filteredHolidays = this.state.holidays.filter(holiday => {
      return holiday._id !== id;
    });
    this.setState({
      holidays: filteredHolidays
    });
  }

  getHoliday(holiday) {
    this.setState({
      holiday: holiday,
      isHolidaySet: true
    });
  }

  async toggleCelebrated(selectedHoliday) {
    await axios.put(`${baseURL}/holidays/${selectedHoliday._id}`, {
      celebrated: !selectedHoliday.celebrated
    });

    const updatedHolidays = this.state.holidays.map(holiday => {
      // if holiday is selected, change holiday.selected to opposite value
      // else if holiday is NOT selected, return holiday
      if (holiday._id === selectedHoliday._id) {
        holiday.celebrated = !holiday.celebrated;
        return holiday;
      } else {
        return holiday;
      }
    });
    // console.log(updatedHolidays);
    this.setState({
      holidays: updatedHolidays
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        <NewForm handleAddHoliday={this.handleAddHoliday} />
        <table>
          <tbody>
            {this.state.holidays.map(holiday => {
              return (
                <tr
                  key={holiday._id}
                  onMouseOver={() => this.getHoliday(holiday)}
                >
                  <td
                    className={holiday.celebrated ? "celebrated" : null}
                    onDoubleClick={() => this.toggleCelebrated(holiday)}
                  >
                    {holiday.name}
                  </td>
                  <td onClick={() => this.deleteHoliday(holiday._id)}>X</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.isHolidaySet && <Show holiday={this.state.holiday} />}
      </div>
    );
  }
}

export default App;

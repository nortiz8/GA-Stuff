import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const MyComponent = props => {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <h4>Welcome to {props.title}</h4>
//     </div>
//   );
// };

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Skynet'
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  // async /await axios
  async componentDidMount() {
    const response = await axios(url);
    const data = response.data;
    this.setState({
      title: data.title
    });
  }
  // AXIOS CALL
  //   componentDidMount() {
  //     axios(url).then(response => {
  //       const data = response.data;
  //       this.setState({ title: data.title });
  //     });
  //   }

  //  FETCH CALL
  //   componentDidMount() {
  //     fetch(url)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(jsonResponse => {
  //         this.setState({ title: jsonResponse.title });
  //       });
  //   }
  changeTitle() {
    this.setState({
      title: 'Gone with the Wind'
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <TitleComponent title={this.state.title} />
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    );
  }
}

export default MyComponent;

import React, { Component } from 'react';
import Bio from './Bio';
import Facts from './Facts';

// const BioFacts = props => {
//   return (
//     <div style={props.style}>
//       <Bio name={props.name} age={props.age} hometown={props.hometown} />
//       <Facts shortBio={props.shortBio} />
//     </div>
//   );
// };

class BioFacts extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    alert('Hey is for horses!');
  }
  render() {
    return (
      <div style={props.style}>
        <Bio name={props.name} age={props.age} hometown={props.hometown} />
        <Facts shortBio={props.shortBio} onClick={this.sayHello} />
      </div>
    );
  }
}

export default BioFacts;

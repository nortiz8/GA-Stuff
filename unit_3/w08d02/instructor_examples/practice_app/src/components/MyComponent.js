import React, {Component} from 'react';
import TitleComponent from './TitleComponent.js';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

            // --------- functional component ---------
// const MyComponent = (props) => {
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>You're in {props.title}</h2>
//         </div>
//     )
// }

            // --------- class component ---------

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
        // bind here
        this.changeTitle = this.changeTitle.bind(this)
    }

            // --------- async/await axios ----------
    async componentDidMount() {
        const response = await axios(url);
        const data = response.data;
        this.setState({
            title: data.title
        })
        
        
        
                // --------- Regular axios call ---------

        // axios(url)
        // .then(response => {
        //     const data = response.data;
        //     this.setState({
        //         title: data.title
        //     })
        // })

                // ---------- Fetch call ---------

        // fetch(url)
        // .then(response => {
        //     return response.json();
        // })
        // .then(jsonResponse => {
        //     this.setState({
        //         title: jsonResponse.title
        //     })
        // })
    }

    changeTitle() {
        this.setState({
            title: "Gone with the Wind"
        })
    }


    render() {
       return (
        <div>
            <h1>Hello World</h1>
            <TitleComponent title={this.state.title}/>
            <button onClick={this.changeTitle}>Change title</button>
        </div>
       ) 
    }
}

export default MyComponent;
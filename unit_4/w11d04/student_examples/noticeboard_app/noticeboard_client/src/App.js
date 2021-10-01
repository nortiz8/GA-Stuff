import React from 'react';
import axios from 'axios';
import Aside from './components/Aside.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Nav from './components/Nav.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
      formInputs: {
        author: '',
        content: '',
        title: ''
      }
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.getNotices();
  }

  async getNotices() {
    const response = await axios('/notices');
    const data = response.data;
    this.setState({
      notices: data
    });
    // fetch('/notices')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(error => console.log(error));
  }

  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post('/notices', formInputs);
    this.setState({
      formInputs: {
        author: '',
        content: '',
        title: ''
      }
    });
    this.getNotices();
    // fetch('/notices', {
    //   body: JSON.stringify(formInputs),
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(createdNotice => {
    //     return createdNotice.json();
    //   })
    //   .then(jsonedNotice => {
    //     this.setState({
    //       formInputs: {
    //         author: '',
    //         content: '',
    //         title: ''
    //       },
    //       notices: [jsonedNotice, ...this.state.notices]
    //     });
    //   })
    //   .catch(error => console.log(error));
  }
  async handleDelete(deletedNotice) {
    await axios.delete(`/notices/${deletedNotice.id}`, deletedNotice.id);
    this.getNotices();
    // fetch(`/notices/${deletedNotice.id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(json => {
    //     this.setState(state => {
    //       const notices = state.notices.filter(
    //         (notice, index) => notice.id !== deletedNotice.id
    //       );
    //       return {
    //         notices
    //       };
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    await axios.put(`/notices/${formInputs.id}`, formInputs);
    this.getNotices();
    // fetch(`/notices/${formInputs.id}`, {
    //   body: JSON.stringify(formInputs),
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(updatedNotice => {
    //     this.getNotices();
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            notices={this.state.notices}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

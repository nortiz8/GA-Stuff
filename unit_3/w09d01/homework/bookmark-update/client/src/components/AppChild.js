import React from 'react';
import axios from 'axios';
import EditForm from './EditForm';

class AppChild extends React.Component {
  constructor() {
    super();
    this.state = {
      editButton: false,
      currentBookmark: {
        id: '',
        title: '',
        url: ''
      }
    }

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleUpdateButton = this.handleUpdateButton.bind(this);
  }

  async handleEditButton(clicked) {
    await this.setState(prevState => ({
      editButton: !prevState.editButton,
      currentBookmark: {
        id: clicked._id,
        title: clicked.title,
        url: clicked.url
      }
    }));
  }

  async handleOnChange(evt) {
    const { name, value } = evt.target;
    const { currentBookmark } = { ...this.state };
    const thisBookmark = currentBookmark;
    thisBookmark[name] = value;
    await this.setState({
      currentBookmark: thisBookmark
    });
  }

  async handleUpdateButton(evt, id) {
    try {
      evt.preventDefault();
      await axios.put(`http://localhost:3001/bookmarks/${id}`, this.state.currentBookmark);
      await this.props.getAllBookmarks();
      await this.setState(prevState => ({
        editButton: !prevState.editButton,
        currentBookmark: {
          id: '',
          title: '',
          url: ''
        }
      }));
    } catch (err) {
      console.log('PUT Request Error:', err.message);
    }
  }

  render() {
    const { index, eachBookmark } = this.props;

    const showEditForm = this.state.editButton ? <EditForm currentBookmark={this.state.currentBookmark} handleOnChange={this.handleOnChange} handleUpdateButton={this.handleUpdateButton} /> : null;

    return (
      <div className="bookmarks">
        <h5>App Child</h5>
        <h3>Title: {eachBookmark.title}</h3>
        <h3>URL: {eachBookmark.url}</h3>
        <button onClick={() => this.handleEditButton(eachBookmark)}>Edit</button>

        {showEditForm}
      </div>
    );
  }
}

export default AppChild;
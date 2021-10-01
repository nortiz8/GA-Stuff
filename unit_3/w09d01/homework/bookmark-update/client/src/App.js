import React from 'react';
import './App.css';
import axios from 'axios';
import AppChild from './components/AppChild';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allBookmarks: [],
      apiOK: false
    }
    
    this.getAllBookmarks = this.getAllBookmarks.bind(this);
    this.showAllBookmarks = this.showAllBookmarks.bind(this);
  }

  componentDidMount() {
    this.getAllBookmarks();
  }

  async getAllBookmarks() {
    try {
      const getRequest = await axios.get('http://localhost:3001/bookmarks');
      console.log('GET OK:', getRequest.data);
      const bookmarksData = getRequest.data;
      this.setState(prevState => ({
        allBookmarks: bookmarksData,
        apiOK: true
      }));
      console.log('setState:', this.state);
    } catch (err) {
      console.log('GET Error:', err.message);
    }
  }

  showAllBookmarks() {
    const mapAllBookmarks = this.state.allBookmarks.map(
      (eachBookmark, index) => {
        return (
          <AppChild
            eachBookmark={eachBookmark}
            key={index}
            getAllBookmarks={this.getAllBookmarks}
          />
        );
      }
    );

    return mapAllBookmarks;
  }
  
  render() {
    const renderBookmarks = this.state.apiOK ? this.showAllBookmarks() : <h5>API Request Failed</h5>;

    return (
      <div>
        <h3>App Parent</h3>

        {renderBookmarks}
      </div>
    );
  }
}

export default App;

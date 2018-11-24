import React, { Component } from 'react';

class App extends Component {

  searchQuery = () => {
      console.log("Searching!!!");
  }
  render() {
      return (
        <div>
          <input placeholder="Enter Movie or Series"></input>
          <button onClick={() => this.searchQuery}>Search</button>
        </div>
      );
  }
}

export default App;

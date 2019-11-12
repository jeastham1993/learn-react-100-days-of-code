import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = {
    username: 'State usernmae'
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.username} changed={this.changeUsernameHandler}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username='John'></UserOutput>
        <UserOutput username='Sharon'></UserOutput>
      </div>
    );
  }
}

export default App;

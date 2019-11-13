import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';
import './Char/Char.css';

class App extends Component {

  state = {
    textLength: 0,
    typedText: ''
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.typedText.split('');
    chars.splice(charIndex, 1);

    this.setState({
      typedText: chars.join('')
    });
  }

  inputChangedHandler(event){
    const splitLetters = event.target.value.split('');

    let chars = this.state.typedText.split('');

    chars = splitLetters;

    this.setState({
      textLength: event.target.value.length,
      typedText: event.target.value,
      renderedChars: chars
    });
  }

  render() {
    const charList = this.state.typedText.split('').map((char, index) => {
      return (<Char 
        clicked={() => this.deleteCharHandler(index)}
        assignedLetter={char} 
        key={index}/>)
    });

    return (
      <div className="App">
        <input onChange={(event) => this.inputChangedHandler(event)} value={this.state.typedText}/>
        <p><Validation textLength={this.state.textLength}></Validation></p>
        {
          charList
        }
      </div>
    );
  }
}

export default App;

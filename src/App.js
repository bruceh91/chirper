import React, { Component } from 'react';
import logo from './birdy.png';
import './App.css';
import PostCreationContainer from './components/PostCreationContainer';
import ChirpContainer from './components/ChirpContainer';
import PostInput from './components/PostInput';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'yo'
    };
  }

  changeTitle(title){
    console.log(title);
    this.setState({title});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>
        <PostCreationContainer />
        <ChirpContainer />
        <PostInput changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
    );
  }
}

export default App;

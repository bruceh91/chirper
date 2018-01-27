import React, { Component } from 'react';
import logo from './birdy.png';
import './App.css';
import PostButton from './components/PostButton';
import Chirp from './components/Chirp';
import PostInput from './components/PostInput';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        chirp: {
          val: 'yoyo',
      },
        chirpArr: [],
        timeArr: [],
    };
  }

  changeInput(input){
    this.setState({chirp: input});
}

  postChirp(chirp){
    console.log('first');
    console.log(this.state.timeArr);
    this.state.chirpArr.push(this.state.chirp);
    this.setState({value: chirp, chirpArr: this.state.chirpArr});
    this.state.timeArr.push('0');
  //   onChange(event){
  //     this.state.arr.push('newvalue');
  //     ...
  //     this.setState({some:'val',arr:this.state.arr})
  // }

  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>
        <div  className="col-10 mx-auto border rounded m-4 ">
                <p className="mt-2 mt-4 mb-0 d-flex align-items-start">Create a chirp:</p>
                <PostInput changeInput={this.changeInput.bind(this)} input={this.state.input}/>
                <br />
                <PostButton postChirp={this.postChirp.bind(this)}/>
        </div>
     
        <Chirp time={this.state.timeArr} chirp={this.state.chirpArr}/>
        
      </div>
    );
  }
}

export default App;

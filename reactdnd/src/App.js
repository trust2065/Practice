import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import InputBox from "./components/InputBox";

class App extends Component {
  render() {
    const {knightPosition} = this.props;
    return (
        <div style={{ margin: "100px 0 0 100px"}}>
          <InputBox no={1}/>
          <InputBox no={2}/>
        </div>
    );
  }
}

export default App;

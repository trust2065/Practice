import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Board from "./components/Board";

class App extends Component {
  render() {
    return <div style={{ width: "500px", height: "500px" }}>
        <Board knightPosition={[0, 0]} />
      </div>;
  }
}

export default App;

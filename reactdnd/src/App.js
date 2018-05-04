import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Board from "./components/Board";

class App extends Component {
  render() {
    const {knightPosition} = this.props;
    return (
        <div style={{ width: "500px", height: "500px" }}>
          <Board knightPosition={knightPosition} />
        </div>
    );
  }
}

export default App;

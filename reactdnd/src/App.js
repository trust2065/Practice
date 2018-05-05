import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import InputBox from "./components/InputBox";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
class App extends Component {
  render() {
    return (
        <div style={{ margin: "100px 0 0 100px"}}>
          <InputBox no={1}/>
          <InputBox no={2}/>
        </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

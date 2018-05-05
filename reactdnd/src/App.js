import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import InputBox from "./components/InputBox";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
class App extends Component {
  render() {
    const {sourceNo, targetNo} = this.props;
    let inputBoxList = [];
    for (let i = 0; i < 2; i++) {
      let text = "default";
      if (targetNo === i+1) {
        text = sourceNo;
      }
      inputBoxList.push(<InputBox no={i+1} text={text}/>);
    }
    return (
        <div style={{ margin: "100px 0 0 100px"}}>
          {inputBoxList}
        </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

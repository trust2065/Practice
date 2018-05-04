import React, { Component } from "react";
import { DragSource } from "react-dnd";
import {ItemTypes} from "../constants/ReactDndItemTypes";

const knightSource = {
  beginDrag(props) {
    return {};
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  render() {
    console.log(this.props);
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 40,
        fontWeight: 'bold',
        cursor: 'move',
        margin: "0 auto", 
        // fontSize: "40px"
      }}>
        <span>♘</span>
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);


import React, { Component } from "react";
// import PropTypes from "prop-types";

import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
import { moveKnight, canMoveKnight } from "./Game";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

 
class Board extends Component {
  // static propTypes = {
  //   knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  // };
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const [knightX, knightY] = this.props.knightPosition;
    const piece = x === knightX && y === knightY ? <Knight test='knightProps' /> : null;
    return <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {piece}
        </BoardSquare>
      </div>;
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  render() {
    const squres = [];
    for (let i = 0; i < 64; i++) {
      squres.push(this.renderSquare(i));
    }
    // console.log(squres);

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squres}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
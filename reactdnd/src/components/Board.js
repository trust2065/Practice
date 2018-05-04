import React, { Component } from "react";
// import PropTypes from "prop-types";

import Knight from "./Knight";
import Square from "./Square";
import { moveKnight } from "./Game";

export default class Board extends Component {
  // static propTypes = {
  //   knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  // };
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i/8);

    const black = (x + y) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;
    const piece = x === knightX && y === knightY ? <Knight /> : null;
    return <div key={i} 
        style={{width: "12.5%", height: "12.5%"}}
        onClick={() => this.handleSquareClick(x, y)}
      >
        <Square black={black}>{piece}</Square>
      </div>;
  }

  handleSquareClick(toX, toY) {
    moveKnight(toX, toY);
  }

  render() {
    const squres = [];
    for (let i =0; i<64; i++) {
      squres.push(this.renderSquare(i));
    }
    // console.log(squres);

    return (
      <div style={{ 
        width: "100%", 
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}>
        {squres}
      </div>
    );
  }
}

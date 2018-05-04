import React, { Component } from "react";
import Square from "./Square"

export default class BoardSquare extends Component {
    render() {
        const { x, y } = this.props;
        const black = (x + y) % 2 === 1;

        return (
        <Square black={black}>
            {this.props.children}
        </Square>
        );
    }
}
import React, {Component} from "react"
import { DragSource } from "react-dnd";
import {ItemTypes} from "../constants/ReactDndItemTypes";

const inputBoxSource = {
    beginDrag(props) {
        return {};
    },
};

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
    };
}

class InputBox extends Component {
    render() {
        const { connectDragSource } = this.props;
        const {no} = this.props;
        return connectDragSource(<div style={{ border: "1px solid black", width: "200px", marginTop: "20px"}}>
            <p>{no}</p>
            <input type="text"/>
        </div>)
    }
}

export default DragSource(ItemTypes.INPUTBOX, inputBoxSource, collect)(InputBox);
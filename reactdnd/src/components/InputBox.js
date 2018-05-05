import React, {Component} from "react"
import { DragSource, DropTarget } from "react-dnd";
import {ItemTypes} from "../constants/ReactDndItemTypes";
import _ from 'lodash'

const inputBoxSource = {
    beginDrag(props) {
        return {
            no: props.no
        };
    },
};

function collectSource(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
    };
}

const inputBoxTarget = {
    drop(props, monitor) {
        const no = monitor.getItem() ? monitor.getItem().no : null;
        console.log(`drop source ${no}`);
        // dispatch action here
    }
};

function collectTarget(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
    };
}

class InputBox extends Component {
    render() {
        const { connectDragSource, connectDropTarget, no } = this.props;
        console.log(this.props);
        return connectDropTarget(connectDragSource(<div style={{ border: "1px solid black", width: "200px", marginTop: "20px"}}>
            <p>{no}</p>
            <input type="text" />
        </div>))
    }
}

export default _.flow([
    DragSource(ItemTypes.INPUTBOX, inputBoxSource, collectSource),
    DropTarget(ItemTypes.INPUTBOX, inputBoxTarget, collectTarget)
])(InputBox);

// export default DropTarget(ItemTypes.INPUTBOX, inputBoxTarget, collectTarget)(DragSource(ItemTypes.INPUTBOX, inputBoxSource, collectSource)(InputBox));
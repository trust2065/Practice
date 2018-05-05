import React, {Component} from "react"


class InputBox extends Component {
    render() {
        const {no} = this.props;
        return <div style={{ border: "1px solid black", width: "200px", marginTop: "20px"}}>
            <p>{no}</p>
            <input type="text"/>
        </div>
    }
}

export default InputBox;
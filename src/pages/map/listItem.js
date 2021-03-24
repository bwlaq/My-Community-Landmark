import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            landmarkName: this.props.landmarkName,
            editor: this.props.editor,
            note: this.props.note
        }
    }

    render() {
        return <div>
            <li>
                {this.state.landmarkName}
            </li>
            <li>
                {this.state.editor}
            </li>
            <li>
                {this.state.note}
            </li>
        </div>
    }
}
export default ListItem;
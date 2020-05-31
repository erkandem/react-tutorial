import React, { Component } from "react"
import FlipMove from 'react-flip-move';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
        this.delete = this.delete.bind(this);
    }
    render() {
        var entries = this.props.entries;
        var renderedEntries = entries.map(this.createTask);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                {renderedEntries}
                </FlipMove>
            </ul>
        )
    }
    createTask(item) {
        return (
            <li
                onClick={() => this.delete(item.key)}
                key={item.key}>
                {item.text}
            </li>
        );
    }
    delete(key) {
        this.props.delete(key);
    }
}

export default TodoList

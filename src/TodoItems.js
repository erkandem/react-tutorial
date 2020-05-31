import React, { Component } from "react"


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this)
    }
    render() {
        var entries = this.props.entries;
        var renderedEntries = entries.map(this.createTask);
        return (
            <ul className="theList">
                {renderedEntries}
            </ul>
        )
    }
    createTask(item) {
        return <li key={item.key}>{item.text}</li>
    }
}

export default TodoList

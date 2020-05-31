import React, { Component } from "react"


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input
                            placeholder="enter task"
                            ref={(a) => this._inputElement = a}
                        />
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
    }

export default TodoList;

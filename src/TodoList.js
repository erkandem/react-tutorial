import React, { Component } from "react"


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        this.addItem = this.addItem.bind(this);
        this.resetInput = this.resetInput.bind(this);
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

    addItem(e) {
        var itemsArray = this.state.items;
        if (this._inputElement.value !== "") {
            itemsArray.push(this._inputElement.value)
        }
        this.setState({items: itemsArray});
    }

    resetInput() {
        this._inputElement.value = "";
    }
    }

export default TodoList;

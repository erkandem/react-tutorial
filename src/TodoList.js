import React, { Component } from "react"
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder="enter task"
                            ref={(a) => this._inputElement = a}
                        />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }

    addItem(e) {
        var itemsArray = this.state.items;
        if (this._inputElement.value !== "") {
            itemsArray.push({
                text: this._inputElement.value,
                key: Date.now()
            });
        }
        this.setState({items: itemsArray});
        e.preventDefault();
        this.resetInput()
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(
                function(item) {
                    return (item.key !== key);
                }
            );
        this.setState({
            items: filteredItems
        });
    }

    resetInput() {
        this._inputElement.value = "";
    }
}

export default TodoList;

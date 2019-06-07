import React from "react";
import shortid from "shortid";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    id:1,
                    description: "buy things",
                    done: false
                }
            ]
        };
    }

    onAddItem = description => {
        let items = this.state.items;
        items.push({
            id: shortid.generate(),
            description, 
            done: false
        });
        this.setState({ items });
    };

    toggleDone = id => {
        this.setState(state => ({
          items: state.items.map(item => {
            if (item.id === id) {
              // suppose to update
              return {
                ...item,
                complete: !item.complete
              };
            } else {
              return item;
            }
          })
        }));
    };

    deleteTodo = id => {
        this.setState(state => ({
          items: state.items.filter(item => item.id !== id)
        }));
    };

    render() {
        return (
            <div>
                <AddItem onAddItem={this.onAddItem} />
                <ul>
                    {this.state.items.map((value) => {
                        return (
                            <TodoItem
                                description={value.description}
                                done={value.done}
                                key={value.id}
                                toggleDone={() => this.toggleDone(value.id)}
                                deleteTodo={() => this.deleteTodo(value.id)}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

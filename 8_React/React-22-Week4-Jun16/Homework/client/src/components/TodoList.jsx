import React from "react";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount = async () => {
        const data = await fetch("/api/todos");
        const jsonData = await data.json();
        this.setState({
            items: jsonData
        });
    };

    // Step 1: change the onAddItem function to update the items on the server with a request

    onAddItem = async newToDo => {
        let items = this.state.items;
        const response = await fetch("/api/todos", {
          method: "POST",
          body: JSON.stringify({
            id: items.length + 1,
            title: newToDo,
            completed: false
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const newItems = await response.json();
        this.setState({ items: newItems });
        console.log(items);
    };

    // FYI: here is a small example about how to handle the update of an item. Take inspiration from it to build the other requests!

    handleChecked = async index => {
        let item = this.state.items[index];
        item.completed = !item.completed;
        const response = await fetch(`/api/todos/${item.id}`, {
            method: "PUT",
            body: JSON.stringify(item), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        const items = await response.json();
        this.setState({
            items
        });
    };

    // Step 3: Do the same as you did on the client and on the server for handling the delete feature

    handleDelete = async item=> {
        //let items = this.state.items;
        // const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
        // const newItems2 = this.state.items.filter((item, indexItem) => {             // other way to delete an item from an array
        //     return indexItem !== index;
        // });
        const response = await fetch(`/api/todos/${item.id}`, {
            method: "DELETE",
            body: JSON.stringify(item), // Coordinate the body type with 'Content-Type'
            Headers: delete({
                "Content-Type": "application/json"
            })
        });
        const newItems = await response.json();
        this.setState({
            items: newItems
        });
    };

    // Step 5: update an item by doing the same call as we did for handling the check/uncheck feature. Here you only need to change the client side since the server side is already done ;)

    handleEdit = (index, title) => {
        let items = this.state.items;
        let item = items[index];
        item.title = title;
        items[index] = item;
        this.setState({
            items
        });
    };

    render() {
        return (
            <div>
                <AddItem onAddItem={this.onAddItem} />
                <ul>
                    {this.state.items.map((value, index) => {
                        return (
                            <TodoItem
                                handleChecked={this.handleChecked}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}
                                title={value.title}
                                completed={value.completed}
                                id={index}
                                key={index} // you can't use it. Just used by map to optimize the rendering
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

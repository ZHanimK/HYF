import React, { Component } from "react";

import "./App.css";

class App extends Component {
    state = {
        response: "",
        post: "",
        responseToPost: ""
    };

    handlePost = async () => {
        const response = await fetch("/api/world", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ post: this.state.post })
        });
        const body = await response.text();

        this.setState({ responseToPost: body });
    };

    handleGet = async () => {
        const response = await fetch("/api/todoItems");
        const todoItems = await response.json();
        //console.log(todoItems)
        this.setState({ items: todoItems},()=>{
            console.log(this.state.items);
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.handleGet}>Get Request</button>
                {/* {
                    this.state.items.map(value=>
                        )
                } */}
                <p>Get answer: {this.state.response}</p>
                <input
                    type="text"
                    value={this.state.post}
                    onChange={e => this.setState({ post: e.target.value })}
                />
                <button onClick={this.handlePost}>Post Request</button>
                <p>Post answer: {this.state.responseToPost}</p>
            </div>
        );
    }
}

export default App;

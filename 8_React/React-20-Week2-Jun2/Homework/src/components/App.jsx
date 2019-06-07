import React from "react";
import "./App.css";
import { TodoList } from "./TodoList"

function App() {
    return (
        <div className="App" style={{ padding: "2vh" }}>
            <h1>Hanim's To-Do List</h1>
            <TodoList />
        </div>
    );
}

export default App;

import React from "react";


export function TodoItem(props){
    return (
        <div style={{ display: "flex", justifyContent: "left" }}>
        <div
          style={{
            textDecoration: props.items.done ? "line-through" : ""
          }}
          onClick={props.toggleDone}
        >
          {props.items.description}
        </div>
        <button onClick={props.deleteTodo }>X</button>
      </div>
    );
}

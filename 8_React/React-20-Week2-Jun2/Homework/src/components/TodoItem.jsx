import React from "react";


export function TodoItem(props){
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "left" }}>
        <div
          style={{
            textDecoration: props.done ? "line-through" : ""
          }}
          onClick={props.toggleDone}
        >
          {props.description}
        </div>
        <button onClick={props.deleteTodo }>X</button>
      </div>
      </div>
    );
}

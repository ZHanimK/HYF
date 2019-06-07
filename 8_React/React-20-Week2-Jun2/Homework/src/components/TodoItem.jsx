import React from "react";


export function TodoItem(props){
    if (props.done===false){
      return (
        <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{color: "red"}} onClick={props.toggleDone}>Undone &nbsp;</div>
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
    
    );
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "left" }}>
        <div style={{color: "green"}} onClick={props.toggleDone}>Done &nbsp;</div>
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
    
    );
    }
  

}

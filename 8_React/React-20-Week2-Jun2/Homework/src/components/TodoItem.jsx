import React from "react";


export function TodoItem(props){
    return (

        <div style={{ display: "flex", justifyContent: "left" }}>
        <div onClick={props.toggleDone}>
            {props.done ? ( <i style={{ color: "green" }} class="fas fa-check-square">&nbsp;</i>) : (<i class="fas fa-square">&nbsp;</i>)}
          </div>
        <div
          style={{
            textDecoration: props.done ? "line-through" : ""
          }}
          onClick={props.toggleDone}
        >
          {props.description}
        </div>
        <button onClick={props.deleteTodo }><i class="fas fa-trash"></i></button>
      </div>
    
    );
    
}

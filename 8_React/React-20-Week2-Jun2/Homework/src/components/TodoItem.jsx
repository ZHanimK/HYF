import React from "react";


export function TodoItem(props){
    return (

        <div style={{ display: "flex", justifyContent: "left" }}>
        <div onClick={props.toggleDone}>
            {props.done ? ( <span style={{color: "green"}}>Done&nbsp;</span>) : ( <span style={{color: "red"}}>Undone&nbsp;</span>)}
          </div>
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

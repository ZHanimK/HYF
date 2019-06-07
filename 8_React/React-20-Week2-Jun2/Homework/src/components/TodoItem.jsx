import React from "react";


export function TodoItem(props){
    // return (
    //     <div style={{ display: "flex", justifyContent: "left" }}>
    //     <div style={{content: props.done ? "Undone" : "Done"}} onClick={props.toggleDone}>Undone</div>
    //     <div
    //       style={{
    //         textDecoration: props.done ? "line-through" : ""
    //       }}
    //       onClick={props.toggleDone}
    //     >
    //       {props.description}
    //     </div>
    //     <button onClick={props.deleteTodo }>X</button>
    //   </div>
    
    // );
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

import React from "react"

function Button(props){
    console.log(props);
    return(
        <button onClick={props.actionCallback}>{props.title}</button>
    )
}
export default Button;
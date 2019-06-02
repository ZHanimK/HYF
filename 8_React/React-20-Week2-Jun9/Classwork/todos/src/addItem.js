import React from 'react';

class AddItem extends React.Component {
    constructor(){
        super()
        this.state={
            value: ''
        }
    }

    handleChange=(event)=> {
        console.log(event)
        const text=event.target.value;
        console.log(text)
        this.setState({value:text})
    }
    handleClick=()=>{
        this.props.addToItemCallback(this.state.value)
        this.setState({value: ''})
    }

    render (){
        return(
        <div>
            <input onChange={this.handleChange} value={this.state.value} placeholder='Enter to do item'/>
            <button onClick={this.handleClick}>Add Item</button>
        </div>
        )
    }
}
export default AddItem
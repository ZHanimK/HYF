import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './toDoItem'
import AddItem from './addItem'

const todosList=[
  {
    title: "Buy the groceries",
    isChecked:false
  },
  {
    title: "do homework",
    isChecked:true
  },
  {
    title: "do the laundary",
    isChecked:false
  }
]

class App extends React.Component {

  constructor(){
    super()
    this.state={
      todos: todosList
    }
  }

  addToDoItem=(title)=>{
    const newToDo={
      title: title,
      isChecked: false
    }
    this.setState({todos:[...this.state.todos, newToDo]})
    
  }
  render() {
    return (
      <div>
        <AddItem addToItemCallback={this.addToDoItem}/>
        <ul>{
          this.state.todos.map(todoItem=>{
          return <ToDoItem title={todoItem.title}/>
        })
        }</ul>
      </div>
    )
  }
}

export default App;

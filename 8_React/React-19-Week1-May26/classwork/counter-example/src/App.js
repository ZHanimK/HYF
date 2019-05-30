// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from "react"
import Button from "./button"

export default class Counter extends React.Component{
  constructor(){ //Our state
    super()
    this.state={
      counter:0
    }
  }
  decrementCounter=()=>{ //event handler #1
    this.setState({
      counter:this.state.counter-1
    })
  }

  incrementCounter=()=>{ //event handler #2
    this.setState({
      counter:this.state.counter+1
    })
  }

  render(){ // rendering 
    return(
      <div>
          <h1>Counter</h1>
          <div>
            <Button actionCallback={this.decrementCounter} title="Decrement"/>
            <text>{this.state.counter}</text>
            <Button actionCallback={this.incrementCounter} title="Increment"/>
          </div>
      </div>
    )
  }


}







// export default class App extends React.Component{
//   constructor(){
//     super()
//       this.state={
//         counter:0
//       }
//     } 
//   render(){
//     return(
//       <div>
//           <button>Increment</button>
//       </div>
//       )
//     }

//   }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

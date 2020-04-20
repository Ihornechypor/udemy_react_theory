import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>
          hello
        </h1>
      </div>
    )
    // return React.createElement(
    //   'div',
    //   {
    //     className: 'Appd'
    //   },
    //   null,
    //   React.createElement(
    //     'h1',
    //     null,
    //     'hello hell'
    //   )
    // )
  }
}

export default App;

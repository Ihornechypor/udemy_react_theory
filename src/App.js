import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render(){
    const  divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>
          hello
        </h1>
        <Car name={'ford'} year={2018}>
          <p style={{color:'blue'}}>color</p>  
        </Car>
        <Car name='audi' year={2016}>
          <p style={{color:'red'}}>color</p>
        </Car>
        <Car name='mazda' year={2010}/>
      </div>
    );
  }
}

export default App;

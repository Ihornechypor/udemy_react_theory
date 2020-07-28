import React, {Component} from 'react';
import classes from './App.module.scss';
import Car from './Car/Car';
import ErrorBoundray from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';
import Counter3 from "./Counter3/Counter3";

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props){
    console.log('app consturctor')
    super(props);
 
    this.state = {
      cars: [
        {name: 'ford', year:2018},
        {name: 'audi', year: 2021},
        {name: 'ford', year:2020}
      ],
      pageTitle: 'Hello react state',
      showCars: false
    };
  }



  onChangeName(name, index){
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars]
    cars[index] = car;

    this.setState({
      cars
    });
  }

  deleteHandler(index){
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({
      cars
    })
  }


  changeViewCars = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };



  render(){
    const  divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if(this.state.showCars){
      cars = this.state.cars.map((car,index)=>{
        return (
          <ErrorBoundray key={index}>
            <Car 
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event=> this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundray>
        )
    })
    }


    
    return (
      <div style={divStyle}>
       
        <h1>
          {this.state.pageTitle}
        </h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        <hr/>

        <Counter3/>


        <button onClick={this.changeViewCars}> 
          Change cars
        </button>


        <button onClick={()=> this.setState({clicked: true})}>
           change clicked 
        </button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
   
      </div>
    );
  }
}

export default App;

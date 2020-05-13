import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'




export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render(){
        return(
            <Auxiliary>
                <h2>
                    counter {this.state.counter}
                </h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
        // return [
        //     <h2 key={1}>
        //         counter {this.state.counter}
        //     </h2>,
        //     <button onClick={this.addCounter}  key={2}>+</button>,
        //     <button onClick={()=> this.setState({counter: this.state.counter - 1})}  key={3}>-</button>,
        // ]
    }
}
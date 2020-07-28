import React, {Component} from 'react';
import {connect} from 'react-redux'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'


class Counter extends Component {
    addCounter = () => {
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render(){

        console.log('app', this.props)

        return(
            <Auxiliary>
                <h2>
                    counter {this.props.counter}
                </h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={()=> this.setState({counter: this.props.counter - 1})}>-</button>
            </Auxiliary>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter)
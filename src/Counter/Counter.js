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

        return(
            <Auxiliary>
                <h2>
                    counter {this.props.counter}
                </h2>
                <Counter2 />
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onSub}>-</button>
            </Auxiliary>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
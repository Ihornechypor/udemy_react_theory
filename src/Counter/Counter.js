import React, {Component} from 'react';
import {connect} from 'react-redux'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'
import {number} from "prop-types";


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
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onSub}>-</button>

                <div className="Actions">
                    <button onClick={() => this.props.onAddNumber(15)}>+ 15</button>
                    <button onClick={() => this.props.onAddNumber(-17)}>- 17</button>
                </div>
            </Auxiliary>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'}),
        onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
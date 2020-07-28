import React, {Component} from 'react';
import {connect} from 'react-redux'
import Auxiliary from '../hoc/Auxiliary'
import {add,sub,addNumber,onAddAs} from "../redux/actions/actions";
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

                <div className="Actions">
                    <button onClick={() => this.props.onAsyncAdd(100)}>asunc 100</button>
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
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number)),
        onAsyncAdd: number => dispatch(onAddAs(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
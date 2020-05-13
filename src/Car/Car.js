import React from 'react';
import PropTypes from 'prop-types';
import classes from './car.module.scss';
import withClass from '../hoc/withClass';

class Car extends React.Component {

    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if(this.props.index === 1){
            this.inputRef.current.focus();
        }
    }


    render(){

        const inputClass = ['input'];
 
        if(this.props.name){
            inputClass.push('green');
        } else {
            inputClass.push('red')
        }
    
        if(this.props.name.length > 4){
            inputClass.push('bold')
        }

        return(
            <React.Fragment>
                <h3>
                    Car name: {this.props.name}
                </h3>
                <p>
                    <strong>
                       Year {this.props.year}
                    </strong>
                </p>
                <input type="text" 
                       ref={this.inputRef}
                       onChange={this.props.onChangeName} 
                       value={this.props.name}
                       className={inputClass.join(' ')}
                />
                <button onClick={this.props.onDelete}>
                    Delete
                </button>  
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}


export default withClass(Car, classes.Car);
import React from 'react';
import Radium from 'radium';
import './car.css';

const Car = props => {
    const inputClass = ['input'];
 
    if(props.name){
        inputClass.push('green');
    } else {
        inputClass.push('red')
    }

    if(props.name.length > 4){
        inputClass.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 5px 0 rgba(0,0,0,.25)',
            cursor: 'pointer'
        }
    }

    return(
        <div className='Car' style={style}>
            <h3>
                Car name: {props.name}
            </h3>
            <p>
                <strong>
                   Year {props.year}
                </strong>
            </p>
            <input type="text" 
                   onChange={props.onChangeName} 
                   value={props.name}
                   className={inputClass.join(' ')}
            />
            <button onClick={props.onDelete}>
                Delete
            </button>  
        </div>
    )
};

export default Radium(Car)
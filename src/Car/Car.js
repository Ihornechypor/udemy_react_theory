import React from 'react';
import './car.css';

export default props => {
    const inputClass = ['input'];

    if(props.name){
        inputClass.push('green');
    } else {
        inputClass.push('red')
    }

    if(props.name.length > 4){
        inputClass.push('bold')
    }

    return(
        <div className='Car'>
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
)};
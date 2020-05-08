import React from 'react';
import './car.css';

export default props =>(
        <div className='Car'>
            <h3>
                Car name: {props.name}
            </h3>
            <p>
                <strong>
                   Year {props.year}
                </strong>
 
            </p>
            <input type="text" onChange={props.onChangeName} value={props.name}/>
            <button onClick={props.onDelete}>
                Delete
            </button>  
        </div>
);
import React from 'react';
import './style.css';
import Employees from '../../utils/employeeList.json';

function InputBar(props) {
    

    return (
        <p className="control has-icons-left">
            <input 
            onChange={props.handleInputChange}
            name="search"
            id="search"
            className="input" 
            type="text" 
            placeholder="Search by Emplolyee Name"
            />
            <span className="icon is-small is-left">
                <i className="fas fa-user-circle"></i>
            </span> 
        </p>
    );
}

export default InputBar;
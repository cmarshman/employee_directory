import React from 'react';
import Card from '../card';
import './style.css';


function Input(){
    return (
        <div className="tile is-ancestor">
        <div className="tile is vertical is-11" id="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification" id="block">
            <div className="field" id="search_employee">
                <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search by Emplolyee Name"/>
                <span className="icon is-small is-left">
                    <i className="fas fa-user-circle"></i>
                </span> 
                </p>
            </div>
            <Card />
            </article>
           </div>
        </div>
        </div>
    );
}

export default Input

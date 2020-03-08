import React from 'react';
import Card from '../card';
import './style.css';


function Input(){
    return (
        <div class="tile is-ancestor">
        <div class="tile is vertical is-11" id="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification" id="block">
            <div class="field" id="search_employee">
                <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search by Emplolyee Name"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-user-circle"></i>
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

import React from 'react';
import Card from '../card';
import SortBtns from '../sortBtns'
import InputBar from '../inputBar';
import './style.css';

function Input(){
    return (
        <div className="tile is-ancestor">
        <div className="tile is vertical is-11" id="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification" id="block">
            <InputBar/>
            <SortBtns/>
            <Card />
            </article>
           </div>
        </div>
        </div>
    );
}

export default Input

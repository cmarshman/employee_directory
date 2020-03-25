import React from 'react';
import './style.css';

function SortBtns () {
    return(
       <>
       <hr/>
       <p className="subtitle">Sort By</p>
       <div className="columns is-multiline">
         <button className="button column is-one-fourth is-primary is-rounded" id="sortBtns" onClick={this.sortName}>Name</button>
         <button className="button column is-one-fourth is-primary is-rounded" id="sortBtns" onClick={this.sortEmail}>Email</button>
         <button className="button column is-one-fourth is-primary is-rounded" id="sortBtns" onClick={this.sortNumber}>Phone Number</button>
         <button className="button column is-one-fourth is-primary is-rounded" id="sortBtns" onClick={this.sortStartDate}>Start Date</button>
       </div>
       </>

    );
}

export default SortBtns
import React from 'react';
import './style.css';
import employees from '../../utils/employeeList.json';

function Card() {

    return (
        <>
            <br />
            <br />
            <div className="columns is-multiline">
            {employees.map(item => (
                <div key={item.id} className="column is-one-third">
                <article  className="tile is-child notification has-text-centered" id="block">
                        <p className="subtitle" id="name">{item.name}</p>
                        <p  id="position">{item.position}</p>
                        <p className="" id="start_date">{item.start_date}</p>
                        <img className="" id="head_shot" src={item.photo} alt={item.name} />
                        <p className="subtitle"><strong>Contact Information</strong></p>
                        <p className="" id="phone">{item.contact_email}</p>
                        <p className="" id="email">{item.contact_number}</p>
                        <p className="" id="department">{item.department}</p>
                        <hr />
                </article>
                </div>
            ))}
            </div>
        </>
    );
}

export default Card
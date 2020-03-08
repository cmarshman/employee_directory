import React from 'react';
import './style.css';
import employees from '../../utils/employeeList.json';

function Card() {

    return (
        <>
            <br />
            <br />
            
            <div >
                {employees.map(item => (
                    <article key={item.id} className="tile is-child notification is-light">
                        <p className="title" id="name">{item.name}</p>
                        <p className="subtitle" id="position">{item.position}</p>
                        <p cid="start_date">{item.start_date}</p>
                        <img  id="head_shot" src={item.photo} alt={item.name} />
                        <p className="subtitle "><strong>Contact Information</strong></p>
                        <p  id="phone">{item.contact_email}</p>
                        <p  id="email">{item.contact_number}</p>
                        <p  id="department">{item.department}</p>
                    </article>
            ))}
            </div>
        </>
    );
}

export default Card
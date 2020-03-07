import React from 'react';
import './style.css';

function Header() {
    return(
    <div>
        <section className="hero is-medium" >
            <div className="hero-body" >
              <div className="container has-text-centered" >
                <h1 className="title" id="hero">
                  Skipper Pets, Inc
                </h1>
                <h2 className="subtitle" id="hero">
                  Employee Directory
                </h2>
              </div>
            </div>
          </section>
    </div>
    );
}

export default Header;
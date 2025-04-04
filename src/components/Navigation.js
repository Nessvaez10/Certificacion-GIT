import React from 'react';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">Inicio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://s-gobierno.hidalgo.gob.mx/Transparencia">Transparencia</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

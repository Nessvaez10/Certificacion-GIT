import { Button } from "bootstrap";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar sticky-top">
      <h3>Formatos Institucionales</h3>
      <div className="list-group">
        <button className="btn">
          <a href="/" rel="noopener noreferrer" className="list-group-item">
            Home{" "}
          </a>
        </button>
        <button className="btn">
          <a
            href="/articulos"
            rel="noopener noreferrer"
            className="list-group-item"
          >
            Material{" "}
          </a>
        </button>
        <button className="btn">
          <a
            href="https://docs.google.com/presentation/d/1-6QUyAD_0ZHqo-lcSrE4cge_XVsU-LPA/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true"
            rel="noopener noreferrer"
            className="list-group-item"
          >
            Formatos{" "}
          </a>
        </button>
        <button className="btn">
          <a
            href="/normatividad"
            rel="noopener noreferrer"
            className="list-group-item"
          >
            Normatividad{" "}
          </a>
        </button>
        <p>
            Comentarios y sugerencias al <a href="mailto:certificacion_segob@hidalgo.gob.mx">informatica_dga@hidalgo.gob.mx</a></p>
      </div>
    </div>
  );
}

export default Sidebar;

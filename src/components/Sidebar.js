import { Button } from "bootstrap";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar sticky-top">
      <h2 className="text-center">Formatos Institucionales</h2>
      <div className="list-group" style={{padding: 20}}>
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
            Cláusulas <br></br> (Lecciones sobre Calidad){" "}
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
            href="/materiales"
            rel="noopener noreferrer"
            className="list-group-item"
          >
            Material Didáctico{" "}
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
        <div className="text-center mt-3">

        <p>
            Comentarios y sugerencias al <a href="mailto:certificacion_segob@hidalgo.gob.mx">certificacion_segob@hidalgo.gob.mx</a></p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { Button } from "bootstrap";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar sticky-top">
      <h2 className="text-center">Certificacion de Calidad</h2>
      <div className="list-group" style={{ padding: 30 }}>
        <button
          type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor: "#70727230", border: 0 }}
        >
          <a
            href="/"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Home{" "}
          </a>
        </button>

        <button
          type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor:  "#70727230", border: 0 }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPRgDNYPbpv7wBRWc2gcQ-pl-O2iMs0JQStIvbXuTYiAqLTA/viewform"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Identificación de necesidades en cuestión de Calidad SEGOB
          </a>
        </button>
        <button
          type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor:  "#70727230", border: 0 }}
        >
          <a
            href="/articulos"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Cláusulas
          </a>
        </button>





        <button
          type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor:  "#70727230", border: 0 }}
        >
          {" "}
          <a
            href="/formatos"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Formatos{" "}
          </a>
        </button>
        <button
          type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor:  "#70727230", border: 0 }}
        >
          {" "}
          <a
            href="/materiales"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Material Didáctico{" "}
          </a>
        </button>
        <button type="button"
          className="btn btn-primary mb-3"
          style={{ backgroundColor:  "#70727230", border: 0 }}>
          <a
            href="/normatividad"
            style={{ textDecoration: 0, color: "black", fontSize: 18 }}
          >
            Normatividad{" "}
          </a>
        </button>

        <div className="text-center mt-3">
          <p>
            Comentarios y sugerencias al{" "}
            <a href="mailto:certificacion_segob@hidalgo.gob.mx">
              certificacion_segob@hidalgo.gob.mx
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

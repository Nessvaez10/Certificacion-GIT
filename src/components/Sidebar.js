import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboard,
  faGraduationCap,
  faFileAlt,
  faBook,
  faGavel,
  faCalendar,
  faCheckDouble,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar sticky-top">
      <h2 className="text-center">Certificación de Calidad</h2>
      <div className="list-group" style={{ padding: 30 }}>
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/")}
        >
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Home
          </span>
        </button>



        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/normas")}
        >
          <FontAwesomeIcon
            icon={faGavel}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Normas de Calidad
          </span>
        </button>






        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/normatividad")}
        >
          <FontAwesomeIcon
            icon={faGavel}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Normatividad
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/marcolegal")}
        >
          <FontAwesomeIcon
            icon={faGavel}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Marco Legal
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/articulos")}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Cláusulas
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/materiales")}
        >
          <FontAwesomeIcon
            icon={faBook}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Material Didáctico
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/formatos")}
        >
          <FontAwesomeIcon
            icon={faFileAlt}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Formatos
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/calendario")}
        >
          <FontAwesomeIcon
            icon={faCalendar}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Calendario
          </span>
        </button>

        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSdPRgDNYPbpv7wBRWc2gcQ-pl-O2iMs0JQStIvbXuTYiAqLTA/viewform")
          }
        >
          <FontAwesomeIcon
            icon={faClipboard}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Formulario de Necesidades de Calidad
          </span>
        </button>
        <button
          type="button"
          className="btn btn-primary d-flex align-items-center mb-3"
          style={{ backgroundColor: "#70727230", border: 0, width: "100%" }}
          onClick={() => (window.location.href = "/capacitaciones")}

        >
          <FontAwesomeIcon
            icon={faAward}
            size="2x"
            style={{ color: "#611131", minWidth: "40px" }}
          />
          <span
            style={{ color: "black", fontSize: 20, textAlign: "left", flex: 1 }}
          >
            Capacitaciones
          </span>
        </button>

        <div className="text-center mt-3">
          <p>
            Comentarios y sugerencias al correo{" "}
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

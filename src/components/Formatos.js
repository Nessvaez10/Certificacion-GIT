import React from "react";
import formatos from "../articles/formatos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Importa el icono que desees usar

function Formatos() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="text-center mb-5">Formatos Institucionales</h1>
      <div className="row justify-content-center">
        {formatos.map((formato) => {
          return (
            <div className="col-4 d-flex justify-content-center mb-4" key={formato.id}>
              <button
                type="button"
                className="btn btn-primary d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor: "#9e2343",
                  border: 0,
                  borderRadius: "90%",
                  width: "150px",
                  height: "150px",
                }}
                onClick={() => {
                  window.open(`${formato.link}`, "_blank");
                }}
              >
                <FontAwesomeIcon icon={faFileAlt} size="2x" className="mb-2" /> {/* Icono */}
                {formato.nombre}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Formatos;

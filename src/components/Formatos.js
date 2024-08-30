import React from "react";
import formatos from "../articles/formatos.json";

function Formatos() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Formatos Institucionales</h1>
      <div className="row">
        {formatos.map((formato) => {
          return (
            <div className="col-4">
              <button
                type="button"
                className="btn btn-primary mb-3
                "
                style={{ backgroundColor: "#611131", border: 0 }}
                key={formato.id}
                onClick={() => {
                  window.open(`${formato.link}`, "_blank");
                }}
              >
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

import React from 'react'

function Normas() {
  return (
    <div>
      <h2 className='text-center mb-5'>Normas</h2>
      <div className="list-group">
      <a href="./docs/FUNDAMENTOSYVOCABULARIO.pdf" target="_blank" rel="noopener noreferrer" className="list-group-item">
      FUNDAMENTOS Y VOCABULARIO SGC
        </a>
      </div>
      <div className="list-group">
        <a href="./docs/REQUISITOS.pdf" target="_blank" rel="noopener noreferrer" className="list-group-item">
        REQUISITOS SGC
        </a>
      </div>
      <div className="list-group">
      <a href="./docs/DIRECTRICES.pdf" target="_blank" rel="noopener noreferrer" className="list-group-item">
      DIRECTRICES PARA AUDITORÍA
        </a>
      </div>
      <div className="list-group">
      <a href="./docs/GESTION.pdf" target="_blank" rel="noopener noreferrer" className="list-group-item">
      GESTIÓN DEL RIESGO
        </a>
      </div>




    </div>
  );
}

export default Normas

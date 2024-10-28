import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articulos from './Articulos';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home'; // Importar el componente Home
import Normatividad from './components/Normatividad';
import Materiales from './components/Materiales';
import Formatos from "./components/Formatos";
import Calendario from "./components/Calendario.js"
import IndicadoresTacticos from './components/IndicadoresTacticos.js';
import MarcoLegal from './components/Marcolegal.js';
import TurnosForm from './components/TurnosForm.js';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return ( 
    <Router>
      <div className="App">
        <header className="App-header bg-wine text-white text-center py-3">
          <img
            src="/images/logo2.png"
            alt="Logo"
            className="logo img-fluid"
            style={{ maxHeight: "100px" }}
          />
        </header>

        {/*         <Navigation />
         */}
        <div className="container-fluid m-5">
          <div className="row">
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <Sidebar />
            </div>
            <div className="col-xxl-9 col-md-6 col-sm-12" style={{ padding: 25 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articulos" element={<Articulos />} />
                <Route path="/normatividad" element={<Normatividad />} />
                <Route path="/materiales" element={<Materiales />} />
                <Route path="/formatos" element={<Formatos />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/indicadores" element={<IndicadoresTacticos />} />
                <Route path="/marcolegal" element={<MarcoLegal />} />
                <Route path="/turnos" element={<TurnosForm />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

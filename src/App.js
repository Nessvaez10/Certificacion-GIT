import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articulos from './Articulos';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home'; // Importar el componente Home

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
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
          <img src="/images/logo2.png" alt="Logo" className="logo img-fluid" style={{ maxHeight: '100px' }} />
          <h1>SG-Calidad</h1>
        </header>

        <Navigation />

        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articulos" element={<Articulos />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

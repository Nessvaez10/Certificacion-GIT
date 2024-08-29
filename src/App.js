import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articulos from './Articulos';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Home from './components/Home'; // Importar el componente Home
import Normatividad from './components/Normatividad';

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
        

{/*         <Navigation />
 */}
        <div className="container-fluid m-5">
          <div className="row">
            <div className="col-xl-3 col-md-12">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-md-12" style={{padding: 25}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articulos" element={<Articulos />} />
                <Route path="/normatividad" element={<Normatividad />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

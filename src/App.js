import React, { useState } from 'react';
import './App.css';
import articlesData from './articles/articles.json';

const categories = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo2.png" alt="Logo" className="logo" />
        <h1 style={{ color: 'white' }}>Capacitación MK1</h1>
      </header>
      
      {/* Imagen de portada */}
      <img src="/images/despacho.gif" alt="Portada" className="portada" />

      <div className="main-content">
        <div className="sidebar">
          <div className="links">
            <h3>Enlaces Útiles</h3>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              Video de YouTube 1
            </a><br /><br />
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              Video de YouTube 2
            </a><br /><br />

            <h3>Formatos Institucionales validados por la Dirección General de Imagen Institucional</h3>
            <a href="/docs/documento1.pdf" target="_blank" rel="noopener noreferrer">
              Formato de Oficios
            </a><br /><br />
            <a href="/docs/documento1.pdf" target="_blank" rel="noopener noreferrer">
              Formato de Tarjeta Informativa
            </a><br /><br />
            <a href="/docs/documento1.pdf" target="_blank" rel="noopener noreferrer">
              Formato de Nombramientos
            </a><br /><br />
            <a href="/docs/documento1.pdf" target="_blank" rel="noopener noreferrer">
              Formato de Personificador
            </a><br /><br />
            <a href="/docs/documento1.pdf" target="_blank" rel="noopener noreferrer">
              Formato de Marbetes
            </a>
          </div>
        </div>
        <div className="content">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <select onChange={handleCategoryChange} className="category-select">
              <option value="">Todos los artículos</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="articles">
            {filteredArticles.map(article => (
              <details key={article.id} className="article">
                {article.image && <img src={article.image} alt={article.title} className="article-image" />}
                <summary>{article.title}</summary>
                <p style={{ whiteSpace: 'pre-wrap' }}>{article.content}</p>
                {article.video && (
                  <div className="video-container">
                    <video width="560" height="315" controls>
                      <source src={article.video} type="video/mp4" />
                    </video>
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
      {/* <footer className="App-footer">
        <p>&copy; 2024 Secretaría de Gobierno. Todos los derechos reservados.</p>
      </footer> */}
    </div>
  );
}

export default App;

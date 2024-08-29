import React, { useState } from 'react';
import articlesData from './articles/articles.json';
import './App.css';

const categories = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6"];

function Articulos() {
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

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="content" style={{ fontSize: '0.875rem' }}>
      <div className="search-bar-container mb-4">
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={handleSearch}
          className="form-control mb-2"
        />
        <select onChange={handleCategoryChange} className="form-select">
          <option value="">Todos los artículos</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="articles">
        {filteredArticles.map(article => (
          <details key={article.id} className="article mb-4 border p-3">
            {article.image && <img src={article.image} alt={article.title} className="article-image img-fluid mb-2" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />}
            <summary className="fw-bold">{article.title}</summary>
            <p style={{ whiteSpace: 'pre-wrap' }}>{article.content}</p>

            {article.video && (
              <div className="video-container mt-2">
                <video width="100%" controls>
                  <source src={article.video} type="video/mp4" />
                </video>
              </div>
            )}

            {article.fileLink && (
              <a href={article.fileLink} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#611131', borderColor: '#611131', color: '#fff' }}>
                Documento de apoyo
              </a>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {article.externalLink && (
              <a href={article.externalLink} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#bb955b', borderColor: '#bb955b', color: '#fff' }}>
              Actividad Quizz
              </a>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {article.externalLink2 && (
              <a href={article.externalLink2} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#9d2550', borderColor: '#9d2550', color: '#fff' }}>
              Evaluación 
              </a>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {article.youtubeLink && (
              <a href={article.youtubeLink} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#737574', borderColor: '#737574', color: '#fff' }}>
              Link del Video
              </a>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}

export default Articulos;

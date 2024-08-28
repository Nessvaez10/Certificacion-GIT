import React, { useState } from 'react';
import './App.css';
import articlesData from './articles/articles.json';

const categories = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6"];

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

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <header className="App-header bg-wine text-white text-center py-3">
        <img src="/images/logo2.png" alt="Logo" className="logo img-fluid" style={{ maxHeight: '100px' }} />
        <h1>SG-Calidad</h1>
      </header>
      
      <img src="/images/sg.gif" alt="Portada" className="portada img-fluid" />

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
  <div className="container">
    <a className="navbar-brand" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li classNamje="nav-item">
          <a className="nav-link" href="#">Transparencia</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mejora Regulatoria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sitio Insitucional</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Facebook</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">X</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Acerca de</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="sidebar sticky-top">
              <h3>Formatos Institucionales</h3>
              <div className="list-group">
                <a href="https://docs.google.com/presentation/d/1-6QUyAD_0ZHqo-lcSrE4cge_XVsU-LPA/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Formato de Carátula
                </a>
                <a href="https://docs.google.com/document/d/1P-R2EAYrvYs3UfdfzkJ9I-COszT_o6NM/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Formato de Evidencia Fotográfica
                </a>
                <a href="https://docs.google.com/document/d/1lv-yb62uVg7AcdzDZVZBDAkvm8qDgBXR/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Lista de Asistencia
                </a>
                <a href="https://docs.google.com/presentation/d/1xWWajdKnMlHwytTeGvlYLxBPIRDWKBUU/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Lomo de Carpetas
                </a>
                <a href="https://docs.google.com/document/d/1KflbJccQYq2aqxzSHYMvs2Re5P3WvSR2/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Formato de Oficios
                </a>
                <a href="https://docs.google.com/presentation/d/1-CbaX_56QsGb0DlVwj7IFLCx9kmgDu8H/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Formato de Personificadores
                </a>
                <a href="https://docs.google.com/document/d/1KflbJccQYq2aqxzSHYMvs2Re5P3WvSR2/edit?usp=drive_link&ouid=101015930341910713283&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Formato de Pestañas para folders
                </a>
              </div>
              <h3 className="mt-4">Enlaces Útiles</h3>
              <div className="list-group">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Video de YouTube 1
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="list-group-item">
                  Video de YouTube 2
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="text-center mt-4">
              <button 
                className="btn mb-2 mx-2"
                style={{ backgroundColor: '#611131', borderColor: '#611131', color: '#fff' }} 
                onClick={() => toggleAccordion(1)}>
                Misión
              </button>
              <button 
                className="btn mb-2 mx-2"
                style={{ backgroundColor: '#611131', borderColor: '#611131', color: '#fff' }} 
                onClick={() => toggleAccordion(2)}>
                Visión
              </button>
              <button 
                className="btn mb-2 mx-2"
                style={{ backgroundColor: '#611131', borderColor: '#611131', color: '#fff' }} 
                onClick={() => toggleAccordion(3)}>
                Valores
              </button>
            </div>
            <div className="accordion mt-4">
              {activeAccordion === 1 && (
                <div className="accordion-item">
                  <h2 className="accordion-header">Misión</h2>
                  <div className="accordion-body">
                    Aquí va la misión.
                  </div>
                </div>
              )}
              {activeAccordion === 2 && (
                <div className="accordion-item">
                  <h2 className="accordion-header">Visión</h2>
                  <div className="accordion-body">
                    Aquí va la visión.
                  </div>
                </div>
              )}
              {activeAccordion === 3 && (
                <div className="accordion-item">
                  <h2 className="accordion-header">Valores</h2>
                  <div className="accordion-body">
                    Aquí van los valores.
                  </div>
                </div>
              )}
            </div>
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
      {article.externalLink && (
        <a href={article.externalLink} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#bb955b', borderColor: '#bb955b', color: '#fff' }}>
        Actividad
        </a>
      )}
      {article.externalLink2 && (
        <a href={article.externalLink2} target="_blank" rel="noopener noreferrer" className="btn mt-2" style={{ backgroundColor: '#9d2550', borderColor: '#9d2550', color: '#fff' }}>
         Actividad 
        </a>
      )}
    </details>
  ))}
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

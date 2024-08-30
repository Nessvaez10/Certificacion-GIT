import React from 'react';
import './Materiales.css'; 


function Materiales() {
  const videos = [
    { src: '/videos/Lec1.mp4', title: '¿Qué es un sistema de Gestión de la Calidad?' },
    { src: '/videos/10tiposdelider.mp4', title: 'Los 10 tipos de líderes y sus rasgos (estilos de liderazgo)' },
    { src: '/videos/***.mp4', title: 'próximamente' },
    { src: '/videos/***.mp4', title: 'próximamente' },
    { src: '/videos/***.mp4', title: 'próximamente' },


];

  return (
    <div className="materiales-container">
      <h2>Materiales</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materiales;

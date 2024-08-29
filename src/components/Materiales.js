import React from 'react';
import './Materiales.css'; 


function Materiales() {
  const videos = [
    { src: '/videos/Lec1.mp4', title: '¿Qué es un sistema de Gestión de la Calidad?' },
    { src: '/videos/***.mp4', title: 'Video 2' },
    { src: '/videos/***.mp4', title: 'Video 3' },
    { src: '/videos/***.mp4', title: 'Video 4' },


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

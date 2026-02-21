import React, { Component } from 'react';

// Añadimos 'agregarALibrary' e 'esLibrary' a las props
const Song = ({ titulo, artista, album, agregarALibrary, esLibrary }) => {
  return (
    <div className="song-card">
      <div className="description">
        <h3>{titulo}</h3>
        <p><strong>Artista:</strong> {artista}</p>
        <p><strong>Album:</strong> {album}</p>
      </div>
      
      {/* Solo muestra el botón si la canción NO está en la biblioteca */}
      {!esLibrary && (
        
            <button className='SongsButton' onClick={() => agregarALibrary({ titulo, artista, album })} style={{  cursor: 'pointer' }}>
            Agregar a mi biblioteca
            </button>
        
       
      )}
    </div>
  );
};




export default Song;
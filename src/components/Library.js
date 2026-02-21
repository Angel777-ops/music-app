/*
-Crea un componente para la biblioteca del usuario
-Crea un nuevo componente Library que también reciba un array de canciones ficticias como props.
-Usa map para iterar sobre la lista y renderizar las canciones agregadas a la biblioteca.
*/


import React from 'react';
import Song from './Song'



const Library = ({ songs }) => {
  return (
    <div className="library-container">
      <h2 className='TitleLibrary'>Mi Biblioteca</h2>
      {songs.map((song, index) => (
        <Song 
          key={index} 
          titulo={song.titulo} 
          artista={song.artista} 
          album={song.album} 
          esLibrary={true} 
        />
      ))}
    </div>
  );
};

export default Library;
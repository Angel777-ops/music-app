/*
-Crea un componente para la lista de resultados de búsqueda
-Crea un nuevo componente SearchResults que reciba un array de canciones ficticias como props.
-Usa map para iterar sobre la lista y renderizar cada canción utilizando el componente Song.
-Asegúrate de asignar una key única a cada canción.
*/

import React from 'react';
import Song from './Song';



const SearchResults = ({ songs, agregarALibrary }) => {
  return (
    <div className="results-container">
      <h2 className='TitleResults'>Resultados</h2>
      {songs.map((song) => (
        <Song 
          key={song.id} 
          titulo={song.title} 
          artista={song.artist} 
          album={song.album}
          agregarALibrary={agregarALibrary}
          esLibrary={false} 
        />
      ))}
    </div>
  );
};

export default SearchResults;


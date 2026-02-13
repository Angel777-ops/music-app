import React, { Component } from 'react';

class Song extends Component {
  render() {
    // Extraemos las propiedades que pasan desde el padre
    const { titulo, artista, album } = this.props;

    return (
      <div className="song-card">
        <div className='description'>
            <h3>{titulo}</h3>
            <p><strong>Artista:</strong> {artista}</p>
            <p><strong>Album:</strong> {album}</p>
        </div>
      </div>
    );
  }
}

export default Song;
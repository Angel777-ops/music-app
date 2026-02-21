import React, {  useState} from "react";
import Header from './components/Header';
import Song from './components/Song';
import SearchResults from './components/SearchResults';
import Library from './components/Library';


import './App.css';


const App =() =>{
 
  // 1. Estado para resultados de búsqueda (datos ficticios)
  const [searchResults, setSearchResults] = useState([
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", album:"After hours" },
    { id: 2, title: "Hold on were going home", artist: "Drake", album:"After hours" },
    { id: 3, title: "Hotel California", artist: "Eagles", album:"Hotel california" }
  ]);

  // 2. Estado para la biblioteca (inicialmente vacía)
  const [library, setLibrary] = useState([]);


   // Función para añadir canciones al estado
  const agregarALibrary = (cancion) => {
    // Evita duplicados comparando por título o ID
    if (!library.find(c => c.titulo === cancion.titulo)) { 
      setLibrary([...library, cancion]);
    }
  };

  // useEffect para imprimir en consola cada vez que cambie la biblioteca
 

  
  return (

    <div className='background'>
      <div className='background-color'>
        <div className="App">
          <Header />
        </div>
          
        <main>
           

            


          <div >
              
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            < SearchResults 
              songs={searchResults} 
              agregarALibrary={agregarALibrary} 
            />

            <Library songs={library} />

            </div>
          </div>

        </main>
     </div>
    </div>
      

      
  );
  
};

export default App;
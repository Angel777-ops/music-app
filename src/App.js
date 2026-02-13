import React, {Component} from "react";
import Header from './components/Header';
import Song from './components/Song';
import './App.css';


class App extends Component {
  
  // Este método se ejecuta cuando el componente ya está en el DOM
  componentDidMount() {
    console.log("¡El componente App se ha montado correctamente!");
  }

  render() {
     return (

    <div className='background'>
      <div className='background-color'>
        <div className="App">
          <Header />
        </div>
          
        <main>
            <Song titulo="Hold on were going home" artista="Drake" album="Nothing was the same" />
            <Song titulo="Blinding Lights" artista="The Weeknd" album="After hours" />
            <Song titulo="Hotel California" artista="Eagles" album="Hotel california" />
        </main>
     </div>
    </div>
      
  );
  }
}

export default App;
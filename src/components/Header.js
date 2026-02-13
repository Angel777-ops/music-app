import React, {Component} from "react"; 

class Header extends Component {
   


    render() { //Método render para renderizar el componente
        return(//Renderizamos el header con el nombre de la aplicación y un mensaje de bienvenida o de inicio de sesión dependiendo del estado de isLoggedIn
            <header >
               <h1 className="title">One Frequency</h1>  
                
            </header>
           
        );
    }
}

export default Header;


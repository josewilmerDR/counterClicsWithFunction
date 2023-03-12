import './App.css';
import Boton from './componentes/Boton.jsx'
import freeCodeCampoLogo from './img/fcc_primary_large.jpg'
import Contador from './componentes/Contador.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
  
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0);
    
  }
  useEffect(()=>{console.log("Se inicio el contador por primera vez")},[numClics])
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampoLogo} 
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />       

        <Boton texto='Clic' 
        esBotonClic={true} 
        manejarClic={manejarClic}/>

        <Boton texto='Reiniciar'   
        esBotonClic={false} 
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Error = ({code = '', message = ''}) => {
  let errorMessage = '';

  switch (code) {
    case '400':
      errorMessage = 'Ocurrió un error al procesar la solicitud'
      break;
    
    case '404':
      errorMessage = 'Lo sentimos, la página que buscas no existe.'
      break;

    case '403':
      errorMessage = 'No tienes permisos para acceder a esta página.'
      break;

    case '500':
      errorMessage = 'Ocurrió un error en el servidor'
      break;

    default:
      errorMessage = 'No eres tú, tal vez somos nosotros, por favor inténtalo más tarde.'
      break;
  }

  return (
    <div className="text-center">
        <img src="/looking.jpg" alt="woman looking for something" style={{maxWidth: '400px'}}/>
        <h1>Error {code}</h1>
        <p>{message ? message : errorMessage}</p>
        
        <Link className='btn btn-primary' to='/'>Volver al inicio</Link>
    </div>
  )
}

export default Error
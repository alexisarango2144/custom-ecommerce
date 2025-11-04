import React from "react";
import { Link } from "react-router-dom";

const Error = ({code = ''}) => {
  return (
    <div className="text-center">
        <h1>Error {code}</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        
        <Link className='btn btn-primary' to='/'>Volver al inicio</Link>
    </div>
  )
}

export default Error
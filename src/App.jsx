import { useState } from 'react'
import './assets/sass/App.scss'

import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/** PRIMER PREENTREGA */}
      {/* Se usa React-Bootstrap para los componentes de Bootstrap y se usa la prop "addedClasses" para las clase s personalizadas.
      Los íconos son de la librería React-Icons (https://react-icons.github.io/react-icons/).
      Se usa Sass para los estilos personalizados. */}
      
      <Navbar />
      <ItemListContainer title={"Bienvenidos a mi nueva tienda"} children={'<h2>H2</h2>'} addedClasses={"text-center"}/>

      {/** FIN PRIMERA PREENTREGA */}
      
    </>
  )
}

export default App

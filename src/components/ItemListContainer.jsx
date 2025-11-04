import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"

const ItemListContainer = ({ addedClasses, title }) => {

  const [data, setData] = useState([])
  const { category } = useParams()

  useEffect(() => {
    getProducts()
    .then((response) => {
      if (category) {
        setData(response.filter((product)=> product.category.includes(category)))
      }else{
        setData(response)
      }
    })
    .catch((error)=> console.log(error))
  },[category])

  return (
    <Container className={`${addedClasses} text-center`}>
      {title ? <h1>{title}</h1> : <h1>Bienvenido</h1>}
      {!category ? <h2>Estás viendo todos los productos</h2> : <h2>Estás viendo productos de la categoría {category}.</h2>}
      <ItemList data={data}/>
    </Container>
  )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase/firebase"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = ({ addedClasses, title }) => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState([])
  const { category } = useParams()

  // Usando Firestore
  useEffect(() => {
    setLoader(true)
    // Conectamos la colección
    const productsCollection = category ? query(collection(db, 'products'), where('category', 'array-contains', category)) : collection(db, 'products')

    getDocs(productsCollection)
      .then((res) => {
        //Limpiar y obtener los datos
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setData(list)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoader(false)
      })
  }, [category])

  return (
    <>
      {
        loader
          ? <LoaderComponent />
          :
          <Container className={`${addedClasses ? addedClasses : ''} text-center mb-4`}>
            {title ? <h1>{title}</h1> : <h1>Bienvenido</h1>}
            {!category ? <h2 className="mb-4">Estás viendo todos los productos</h2> : <h2 className="mb-2">Estás viendo productos de la categoría {category}.</h2>}
            <ItemList data={data} />
          </Container>
      }
    </>

  )
}

export default ItemListContainer
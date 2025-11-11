import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase/firebase"

const ItemListContainer = ({ addedClasses, title }) => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState([])
  const { category } = useParams()

  // USANDO LA BASE DE DATOS DE FIRESTORE
  useEffect(()=>{
    setLoader(true)
    // Conectamos la colección
    const productsCollection = collection(db, "products")
    getDocs(productsCollection)
    .then((res)=>{
      //Limpiar y obtener los datos
      const list = res.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data
        }
      })
      setData(list)
    })
  },[])

  //USANDO LA PROMESA DEL MOCK
  // useEffect(() => {
  //   getProducts()
  //   .then((response) => {
  //     if (category) {
  //       setData(response.filter((product)=> product.category.includes(category)))
  //     }else{
  //       setData(response)
  //     }
  //   })
  //   .catch((error)=> console.log(error))
  // },[category])

  // return (
  //   <Container className={`${addedClasses} text-center`}>
  //     {title ? <h1>{title}</h1> : <h1>Bienvenido</h1>}
  //     {!category ? <h2>Estás viendo todos los productos</h2> : <h2>Estás viendo productos de la categoría {category}.</h2>}
  //     <ItemList data={data}/>
  //   </Container>
  // )

  const subirData = ()=>{
    const podSubir = collection(db, 'productos')
    products.map((prod)=> addDoc(prod));
  }
}

export default ItemListContainer
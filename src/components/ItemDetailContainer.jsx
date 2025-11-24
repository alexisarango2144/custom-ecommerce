import React, { useEffect, useState } from "react"
import { getOneProduct } from "../mock/AsyncService"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebase"
import LoaderComponent from "./LoaderComponent"
import SwalToast from "./SwalToast"
import Error from "./Error"

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loader, setLoader] = useState([])
    const [errorObj, setErrorObj] = useState({})

    const { id } = useParams()

    useEffect(() => {
        setLoader(true)

        const docRef = doc(db, 'products', id)
        // Traer el documento
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ id: res.id, ...res.data() })
                } else {
                    SwalToast({
                        icon: "warning",
                        title: `Producto no encontrado.`,
                        content: `El producto con ID: ${id} no existe en la base de datos.`,
                        timer: 10000
                    })
                    setErrorObj({ code: 404, message: "Producto no encontrado" })
                }
            })
            .catch((error) => {
                SwalToast({
                    icon: 'error',
                    title: 'No se pudo cargar el detalle del producto.',
                    content: `${error.message}`,
                    timer: 10000
                })
                setErrorObj({ code: 500, message: error.message })
            })
            .finally(() => {
                // Ocultar el loader animation component
                setLoader(false)
            })
    }, [id])

    return (
        <>
            {
                loader
                    ? <LoaderComponent />
                    :
                    errorObj.code
                    ? <Error code={errorObj.code} message={errorObj.message} />
                    :
                    <Container>
                        <ItemDetail detalle={detalle} />
                    </Container>
            }
        </>
    )
}

export default ItemDetailContainer
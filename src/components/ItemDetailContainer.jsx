import React, { useEffect, useState } from "react"
import { getOneProduct } from "../mock/AsyncService"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebase"
import LoaderComponent from "./LoaderComponent"

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [loader, setLoader] = useState([])

    const { id } = useParams()

    useEffect(() => {
        setLoader(true)

        const docRef = doc(db, 'products', id)
        // Traer el documento
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ id: res.id, ...res.data() })
                }
            })
            .catch((error) => {
                console.log(error)
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
                    <Container>
                        <ItemDetail detalle={detalle} />
                    </Container>
            }
        </>
    )
}

export default ItemDetailContainer
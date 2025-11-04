import React, { useEffect, useState } from "react"
import { getOneProduct } from "../mock/AsyncService"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=>{
    const [detalle, setDetalle]=useState({})

    const {id} = useParams()

    useEffect(()=>{
        getOneProduct(id)
        .then((response)=> setDetalle(response))
        .catch((error)=> console.log(error)
        )
    },[id])

    return (
        <>
            <Container>
                <ItemDetail detalle={detalle} />
            </Container>
        </>
    )
}

export default ItemDetailContainer
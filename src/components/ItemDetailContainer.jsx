import React, { useEffect, useState } from "react"
import { getOneProduct } from "../mock/AsyncService"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ()=>{
    const [detalle, setDetalle]=useState({})

    const {id} = useParams()

    // FIREBASE
    useEffect(()=>{
        // Posteriormente el loader animation component

        const docRef = doc(db, 'productos', id)
        // Traer el documento
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetalle({id:res.id, ...res})
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> console.log('Pendiente lógica para apagar la animación de carga'))
    })
    
    // PROMESA
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((response)=> setDetalle(response))
    //     .catch((error)=> console.log(error)
    //     )
    // },[id])

    return (
        <>
            <Container>
                <ItemDetail detalle={detalle} />
            </Container>
        </>
    )
}

export default ItemDetailContainer
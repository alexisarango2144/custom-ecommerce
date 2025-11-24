import React from "react";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({data}) => {
    return(
        <Container >
            <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
                {data.map((product)=> <Col  key={product.id}><Item product={product}/></Col>)}
            </Row>
        </Container>
    )
}

export default ItemList
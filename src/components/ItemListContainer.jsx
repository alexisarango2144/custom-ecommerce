import { Container } from "react-bootstrap"

const ItemListContainer = ({title, addedClasses}) => {

  return (
    // <div className={`${addedClasses} container`}>
    //     <h1>{title}</h1>
    // </div>

    <Container className={`${addedClasses} text-center`}>
      <h1>{title}</h1>
    </Container>
  )
}

export default ItemListContainer
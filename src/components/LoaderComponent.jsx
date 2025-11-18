import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div className={'d-flex w-100 justify-content-center align-items-center'} style={{height:'85vh'}}>
        <Spinner animation='grow' variant='primary' size='xl'/>
    </div>
  )
}

export default LoaderComponent
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import {Productos} from './../../logic/Productos/index';
const NewCard = ()=> {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      Productos.consultar().then(response => setProducts(response.results))
      
    },[products])

    return(
        <>
            {products.map(product=>{
                    return(
                        <Col>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${product.thumbnail}`} />
                            <Card.Body>
                                <Card.Title>{`${product.title}`}</Card.Title>
                                <Card.Text>{`${product.title}`}
                                </Card.Text>
                                <Button variant="primary">Agregar</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
        </>
    )
}
export default NewCard
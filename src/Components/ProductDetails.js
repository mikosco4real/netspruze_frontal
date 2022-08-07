import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'

import { useParams  } from 'react-router-dom';

const ProductDetails = ({products}) => {
   
    const productParam = useParams();

    return (
        <Container className="product-detail-section">
            <Row>
                <Col>
                    <a href="/products">Products</a>
                </Col>
            </Row>
            {products.map(product => (
                <Row key={product.id} className={product.id != productParam.productId ? 'hidden-row' : 'home-cards-section'}>
                    <Col xs={12} lg={6}>
                        <h6>{product.name.toUpperCase()}</h6>
                        <h1>{product.category.name}</h1>
                        <p>{product.description}</p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Image src={process.env.REACT_APP_BACKEND_HOST + product.image} width="100%" className="home-cards-image"></Image>
                    </Col>
                </Row>
            ))} 
        </Container>
    )
}

export default ProductDetails
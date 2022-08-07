import React from "react"
import {Card, Container, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'

const ProductCards = ({products}) => {
    
return (
    <Container className="product-cards-section">
        <Row>
            {products.map(product => (
                <Col key={product.id} className="py-4 px-2" sm={12} md={6} lg={4}>
                    <Card bg="light" key="primary" text="dark" className="h-100 product-card">
                        <Card.Header>
                            <Image src={process.env.REACT_APP_BACKEND_HOST + product.image} width="100%"></Image>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="py-3">
                                <h2> {product.name}</h2>
                            </Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                            <a href={'/product/' + product.id} className="btn btn-outline-secondary card-button">Learn more</a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
)
}

export default ProductCards
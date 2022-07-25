import React from "react"
import {Card, Container, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Carousel1 from "../assets/carousel-1.jpeg"
import Carousel6 from "../assets/carousel-6.webp"
import Carousel4 from "../assets/carousel-4.jpeg"

const ProductCards = () => {
    const cards = [
        {
            "id": 1,
            "header": "Information Technology",
            "title": "Training Services",
            "text": "We offer training on Microsoft Packages, Graphics Design, AutoCAD, Accounting Softwares etc. Checkout our service catalogue to find more.",
            "imagePath": Carousel1,
            "url": "/product/1"
        },
        {
            "id": 2,
            "header": "Instrumentation",
            "title": "Hardware Supply",
            "text": "We sell computer hardwares and softwares including fully branded PCs like Dell, HP etc. We also supply HSE equipments and PPE. Find out more in our services section",
            "imagePath": Carousel6,
            "url": "/product/2"
        },
        {
            "id": 3,
            "header": "Internet and Security Systems",
            "title": "Specialisation Services",
            "text": "We providing networking solution and internet services. We also specialise in security systems like biometric solutions and CCTV.",
            "imagePath": Carousel4,
            "url": "/product/3"
        },
    ]
return (
    <Container className="product-cards-section">
        <Row>
            {cards.map(card => (
                <Col key={card.id} className="py-4 px-2" sm={12} md={6} lg={4}>
                    <Card bg="light" key="primary" text="dark" className="h-100 product-card">
                        <Card.Header>
                            <Image src={card.imagePath} width="100%"></Image>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="py-3">
                                <h2> {card.title}</h2>
                            </Card.Title>
                            <Card.Text>
                            {card.text}
                            </Card.Text>
                            <a href={card.url} className="btn btn-outline-secondary card-button">Learn more</a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
)
}

export default ProductCards
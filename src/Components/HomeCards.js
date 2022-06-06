import React from "react"
import {Card, Container, Row, Col} from "react-bootstrap"

const HomeCards = () => {
    const cards = [
        {
            "header": "Information Technology",
            "title": "Training Services",
            "text": "We offer training on Microsoft Packages, Graphics Design, AutoCAD, Accounting Softwares etc. Checkout our service catalogue to find more."
        },
        {
            "header": "Instrumentation",
            "title": "Hardware Supply",
            "text": "We sell computer hardwares and softwares including fully branded PCs like Dell, HP etc. We also supply HSE equipments and PPE. Find out more in our services section"
        },
        {
            "header": "Internet and Security Systems",
            "title": "Specialisation Services",
            "text": "We providing networking solution and internet services. We also specialise in security systems like biometric solutions and CCTV."
        },
    ]
return (
    <Container className="home-cards-section">
        <Row>
            {cards.map(card => (
                <Col>
                    <Card bg="light" key="primary" text="dark" style={{ width: '18rem' }} className="mb-2">
                        <Card.Header>{card.header}</Card.Header>
                        <Card.Body>
                            <Card.Title> {card.title} </Card.Title>
                            <Card.Text>
                            {card.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    
)
}

export default HomeCards
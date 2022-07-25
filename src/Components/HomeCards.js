import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Carousel1 from "../assets/carousel-1.jpeg"
import Carousel6 from "../assets/carousel-6.webp"
import Carousel4 from "../assets/carousel-4.jpeg"
import PPEImage from "../assets/ppe.jpg"

const HomeCards = () => {
    const cards = [
        {
            "id": 1,
            "header": "Information Technology",
            "title": "Training Services",
            "text": "We offer training on Microsoft Packages, Graphics Design, AutoCAD, Accounting Softwares etc. Checkout our service catalogue to find more.",
            "imagePath": Carousel1
        },
        {
            "id": 2,
            "header": "Instrumentation",
            "title": "Hardware Supply",
            "text": "We sell computer hardwares and softwares including fully branded PCs like Dell, HP etc. We also supply HSE equipments and PPE. Find out more in our services section",
            "imagePath": Carousel6
        },
        {
            "id": 3,
            "header": "Internet and Security Systems",
            "title": "Specialisation Services",
            "text": "We providing networking solution and internet services. We also specialise in security systems like biometric solutions and CCTV.",
            "imagePath": Carousel4
        },
        {
            "id": 4,
            "header": "Safet and Training",
            "title": "Safety/ QHSE Training",
            "text": "Trainers with BOSIET and HUET certification. They are all OSHA certified. PPE stock for supply. We also do branding in case you want your company logo and name on any of these.",
            "imagePath": PPEImage
        },
    ]
return (
    <Container className="home-cards-container">
        {cards.map(card => (
            <Row key={card.id} className="home-cards-section">
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: (card.id % 2 === 0) ? 2 : 1 }}>
                    <h6>{card.header.toUpperCase()}</h6>
                    <h1>{card.title}</h1>
                    <p>{card.text}</p>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: (card.id % 2 === 0) ? 1 : 2 }}>
                    <Image src={card.imagePath} width="100%" className="home-cards-image"></Image>
                </Col>
            </Row>
        ))}        
    </Container>
)
}

export default HomeCards
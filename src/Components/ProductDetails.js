import React from "react"
import {Card, Container, Row, Col} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Carousel1 from "../assets/carousel-1.jpeg"
import Carousel6 from "../assets/carousel-6.webp"
import Carousel4 from "../assets/carousel-4.jpeg"
import { useParams  } from 'react-router-dom';

const ProductDetails = () => {
    const cards = [
        {
            "id": 1,
            "header": "Lorem Ipsum 1",
            "title": "Training Services",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non aliquet mauris. In sed sollicitudin orci. Nunc venenatis ipsum metus, quis vulputate dui malesuada et. Sed et interdum sapien, efficitur consequat velit. Praesent accumsan maximus lobortis. Curabitur sit amet magna eget ante molestie accumsan. Sed vel mauris accumsan leo aliquet tincidunt. Donec non aliquam sapien. Ut eleifend sed mi vitae accumsan. Sed condimentum ullamcorper magna quis laoreet. Nullam ultrices nec tellus eget tempor. Nunc sed porta purus, sed fermentum leo.",
            "imagePath": Carousel1
        },
        {
            "id": 2,
            "header": "Lorem Ipsum 2",
            "title": "Hardware Supply",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non aliquet mauris. In sed sollicitudin orci. Nunc venenatis ipsum metus, quis vulputate dui malesuada et. Sed et interdum sapien, efficitur consequat velit. Praesent accumsan maximus lobortis. Curabitur sit amet magna eget ante molestie accumsan. Sed vel mauris accumsan leo aliquet tincidunt. Donec non aliquam sapien. Ut eleifend sed mi vitae accumsan. Sed condimentum ullamcorper magna quis laoreet. Nullam ultrices nec tellus eget tempor. Nunc sed porta purus, sed fermentum leo.",
            "imagePath": Carousel6
        },
        {
            "id": 3,
            "header": "Lorem Ipsum 3",
            "title": "Specialisation Services",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non aliquet mauris. In sed sollicitudin orci. Nunc venenatis ipsum metus, quis vulputate dui malesuada et. Sed et interdum sapien, efficitur consequat velit. Praesent accumsan maximus lobortis. Curabitur sit amet magna eget ante molestie accumsan. Sed vel mauris accumsan leo aliquet tincidunt. Donec non aliquam sapien. Ut eleifend sed mi vitae accumsan. Sed condimentum ullamcorper magna quis laoreet. Nullam ultrices nec tellus eget tempor. Nunc sed porta purus, sed fermentum leo.",
            "imagePath": Carousel4
        },
    ];
    const productParam = useParams();

    return (
        <Container className="product-detail-section">
            <Row>
                <Col>
                    <a href="/products">Products</a>
                </Col>
            </Row>
            {cards.map(card => (
                <Row key={card.id} className={card.id != productParam.productId ? 'hidden-row' : 'home-cards-section'}>
                    <Col xs={12} lg={6}>
                        <h6>{card.header.toUpperCase()}</h6>
                        <h1>{card.title}</h1>
                        <p>{card.text}</p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Image src={card.imagePath} width="100%" className="home-cards-image"></Image>
                    </Col>
                </Row>
            ))} 
        </Container>
    )
}

export default ProductDetails
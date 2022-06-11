import { Carousel, } from "react-bootstrap";
import React, { useState } from "react";
import Carousel1 from "../assets/carousel-1.jpeg"
import Carousel2 from "../assets/carousel-2.png"
import Carousel3 from "../assets/carousel-3.jpeg"
import Carousel4 from "../assets/carousel-4.jpeg"
import Carousel5 from "../assets/carousel-5.jpeg"
import Carousel6 from "../assets/carousel-6.webp"

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = [
        {
            "image_path": Carousel1,
            "caption": "Best IT Trainers in World",
            "descripton": "Be the best you can be with our world class trainers, tutoring you",
            "alt": "First Slide"
        },
        {
            "image_path": Carousel2,
            "caption": "Be more Productive with Microsoft",
            "descripton": "We teach you how to use Microsoft Packages to its fullest.",
            "alt": "Second Slide"
        },
        {
            "image_path": Carousel3,
            "caption": null,
            "descripton": null,
            "alt": "Third Slide"
        },
        {
            "image_path": Carousel4,
            "caption": null,
            "descripton": null,
            "alt": "Fourth Slide"
        },
        {
            "image_path": Carousel5,
            "caption": null,
            "descripton": null,
            "alt": "Fifth Slide"
        },
        {
            "image_path": Carousel6,
            "caption": null,
            "descripton": null,
            "alt": "Sixth Slide"
        },
    ]
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="light">
        {images.map((image) => (
            <Carousel.Item key={image.image_path}>
                <img
                className="d-block w-100"
                src={image.image_path}
                alt={image.alt}
                height={600}
                />
                <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.descripton}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
        )}
        </Carousel>
    );
    }

export default HomeCarousel
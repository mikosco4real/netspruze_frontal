import React from "react"
import { Container } from "react-bootstrap"

const AboutUs = () => {
    return (
        <>
        <Container className="main-content">
        <div className="about-us">
            <h1> About Us</h1>
            <div className="divider py-1 bg-primary"></div>
            <p>At Netspruze, At Netspruze, there’s nothing we enjoy more than helping customers solve business issues through effective use of technology. 
                We specialize in helping small, midsize and large companies gain a competitive advantage by being more efficient, gaining a crystal-clear 
                view of their business, and mitigating technology risks. Let us handle all of the complexities so you can focus on your core business.
            </p>
            <p>Our team’s diverse expertise and experience means that you are quickly up and running with solutions that meet your needs.</p>
            <p>Netspruze Limited operates in four core business areas.</p>
            <ul>
                <li>Information Technology services</li>
                <li>Security systems</li>
                <li>QHSE Training and PPE supplies</li>
                <li>Instrumentation systems (installation & services)</li>
            </ul>
        </div>
        </Container>

        </>
    )}

export default AboutUs
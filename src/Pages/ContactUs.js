import React from "react"
import ContactUsForm from "../Components/ContactUsForm"
import { Container } from "react-bootstrap"

const ContactUs = () => {
    return (
        <>
        <Container className="main-content">
        <div className="main-content align-items-center justify-content-center">
            <ContactUsForm />
        </div>
        </Container>
        </>
    )}

export default ContactUs
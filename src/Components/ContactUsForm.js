import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap"

const ContactUsForm = () => {
    const [contactUsFormData, setContactUsFormData] = useState({name: "", email: "", message: ""})
    const [errors, setErrors] = useState({})

    const handleFormChange = (e) => {
        setContactUsFormData({...contactUsFormData, [e.target.name]: e.target.value})

        if (!!errors[e.target.name]){
            setErrors({...errors, [e.target.name]: null})
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        validateForm();
        if (errors.length) {
            return
        }
        else {
            clearForm()
        }
    }
    
    const clearForm = () => {
        setContactUsFormData({name:"", email: "", message: ""})
    }

    const validateForm = () => {
        const {name, email, message} = contactUsFormData
        console.log(name, email, message)
    }

    return (
        <Container className="contact-us">
            <Form className="contact-us-form" onSubmit={handleFormSubmit}>
                <h1>Contact Us</h1>

                <Form.Group className="mb-3" controlId="name" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name="name" value={contactUsFormData.name} onChange={handleFormChange} isInvalid={!!errors.name}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={contactUsFormData.email} onChange={handleFormChange} isInvalid={!!errors.email} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Enter your message" name="message" value={contactUsFormData.message} onChange={handleFormChange} isInvalid={!!errors.message}/>
                </Form.Group>
                
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </Container>
    )
}

export default ContactUsForm
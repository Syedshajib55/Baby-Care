import React, { useEffect, useRef } from 'react';
import './Contact.css'
import contact from './contact.jpg'
import { FloatingLabel, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u80q44n', 'template_c8y8k7k', form.current, 'user_QFpxOJDkNQ4jjfABJ13mo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Thanks for your valuable response!");
        e.target.reset('');
    };

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className='contact-section' id='contact'>
        <div class='container p-4'>
            <h1 class='text-white text-center p-4 text-6xl'>CONTACT US</h1>
            <div className="row flex">
                <div data-aos="fade-down" className="col-lg-6 pb-5">
                    <img class='img-fluid' src={contact} alt="" />
                </div>
                <div data-aos="fade-up" className="col-lg-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <Form.Floating className="mb-3 p-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="name"
                                name="from_name"
                                placeholder="name"
                                style={{ height: '20px', width:'200px' }}
                            />
                            <label htmlFor="floatingInputCustom">Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3 p-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="to_name"
                                placeholder="name@example.com"
                                style={{ height: '20px', width:'200px' }}
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <FloatingLabel className="p-3" controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                name="message"
                                placeholder="Leave a comment here"
                                style={{ height: '200px', width:'600px' }}
                            />
                        </FloatingLabel>
                        <button className='resume-btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
 );  
};

export default Contact;
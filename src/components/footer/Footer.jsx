import React, { useRef } from "react";
import './footer.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { aboutLinks, ContactLinks, sectionLinks } from '../links/FooterLinks';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";



export default function Footer() {

    const emailElement = useRef();
    const checkedElement = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: emailElement.current?.value,
            checkbox: checkedElement.current?.checked
        }
        //POST REQUEST
    }

    return (
        <>
            <section className="footer">
                <img src='./images/footer/make-yourself-pattern.png' className="footer-image" alt="footer_pic"/>
            </section>
            <footer className="footer-section">
                <Container>
                    <div className="footer-image-section">

                    </div>
                    <div className="scroll-button-section">
                        <div className="scroll-btn mb-5">
                            <BsFillArrowUpCircleFill />
                            <a href="#home" > <span>Scroll Up
                            </span>
                            </a>
                        </div>
                    </div>
                    <Container className="footer-links-section">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div className="About-section">
                                    <h2> About </h2>

                                    <ul>
                                        {
                                            aboutLinks.map(link => {
                                                return (

                                                    <li key={link.id}>
                                                        <Link path={link.path} className='link-tags'> {link.path_description} </Link>
                                                    </li>

                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div className="get-in-touch-section">
                                    <h2> Get in Touch </h2>

                                    <ul>{
                                        ContactLinks.map(link => {
                                            return (
                                                <li key={link.id}>
                                                    <Link path={link.path} className='link-tags'> {link.path_description} </Link>
                                                </li>
                                            )
                                        })}</ul></div>

                                <div className="sections mt-5">
                                    <h2> Sections </h2>
                                    <ul>
                                        {
                                            sectionLinks.map(link => {
                                                return (
                                                    <li key={link.id}>
                                                        <Link path={link.path} className='link-tags'> {link.path_description} </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Col>


                            <Col xs={12} sm={6} md={6} lg={4}>
                                <div className="social-media-section">
                                    <h2> Follow Us </h2>

                                    <div className="follow-us-icons">
                                        <a href="https://www.facebook.com/"
                                            target='_blank'
                                            rel="noreferrer">
                                            <FaFacebookF />
                                        </a>

                                        <a href="https://twitter.com/?lang=en"
                                            target='_blank'
                                            rel="noreferrer">
                                            <FaTwitter />
                                        </a>
                                        <a href="https://www.linkedin.com/"
                                            target='_blank'
                                            rel="noreferrer">
                                            <FaLinkedin />
                                        </a>
                                        <a href="https://www.instagram.com/"
                                            target='_blank'
                                            rel="noreferrer">
                                            <FaInstagram />
                                        </a>

                                        <a href="https://www.youtube.com/"
                                            target='_blank'
                                            rel="noreferrer">
                                            <FaYoutube />
                                        </a>

                                    </div>
                                </div>


                                <div className="inbox-section mt-5">
                                    <h2>Get Cinnamon in your inbox </h2>

                                    <Form onSubmit={handleSubmit}>
                                        <div className="submission-form">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email here"
                                                ref={emailElement}
                                                className='form-control form'
                                            >
                                            </Form.Control>
                                            <Button className="arrow-button" type="submit"><MdArrowForwardIos /></Button>
                                        </div>

                                        <div className="checkbox mt-4">

                                            <Form.Check
                                                type="radio"
                                                ref={checkedElement}
                                            />
                                            <Form.Label className="ms-3" style={{ color: "grey" }}> By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the  </Form.Label>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </footer>
        </>
    )
}
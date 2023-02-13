import React, { useState } from "react";
import './header.css';
import { Carousel, Row, Col, Container, Button } from 'react-bootstrap';
import Booking from "./Booking";
import Code from "./Code";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";


export default function Header() {

  const [codeModal, setCodeModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);


  return (
    <>
      {/****  CAROUSEL SECTION ******/}
      <section className="carousel-section" >
        <Carousel className="carousel-slide">
          <Carousel.Item>
            <div className="carousel-image">
              <img
                className="d-block w-100 carousel-image"
                src="./images/carousel/carousel-img-1.jpg"
                alt="First slide" />
            </div>

            <div className="carousel-caption">
              <h1>Enjoy More Value With Cash & Points</h1>
              <h4>Live your vision of the Good Life with more flexibility</h4>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div className="carousel-image">
              <img
                className="w-100 carousel-image"
                src="./images/carousel/carousel-img-2.png"
                alt="First slide" />
            </div>

            <div className="carousel-caption">
              <h1>A Special Welcome</h1>
              <h4>Become a Shangri-La Circle Member to enjoy exclusive welcome privileges</h4>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-image">
              <img
                className="d-block w-100 carousel-image"
                src="./images/carousel/carousel-img-3.jpg"
                alt="First slide" />
            </div>

            <div className="carousel-caption">
              <h1>Rediscover Vibrant Southeast Asia</h1>
              <h4>Book your stay at Shangri-La</h4>

            </div>
          </Carousel.Item>
        </Carousel>

        {/******DATE SECTION ******/}
        <section className="booking-section">
          <Container>
            <div className="containers">
              <Row className="row">
                <Col xs={12} sm={6} md={6} lg={3} className="column me-2 ms-5">
                  <input type="date" className="w-100 p-3" />
                </Col>


                {/* BOOKING SECTION  */}
                <Col xs={12} sm={6} md={6} lg={3} className="column me-2">
                  <h5 onClick={() => setBookingModal(true)} className='mt-3 ms-3'> <BsFillPersonFill /> Adult </h5>
                  {
                    bookingModal && <Booking setBookingModal={setBookingModal} />
                  }
                </Col>


                {/* special code section */}
                <Col xs={12} sm={6} md={6} lg={3} className="column me-2" >
                  <h5 onClick={() => setCodeModal(true)} className='mt-3 ms-3'><AiFillTag /> Code </h5>
                  {
                    codeModal && <Code setCodeModal={setCodeModal} />
                  }
                </Col>


                {/* BUTTON */}
                <Col xs={12} sm={6} md={6} lg={2}>
                  <Button className="search-btn"> Search </Button>
                </Col>
              </Row>
            </div>


          </Container>
        </section>
      </section>
    </>
  )
}
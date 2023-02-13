import React, { useState } from "react";
import './offers.css';
import offersData from "../../Data/offersData";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Offers() {

    const [data, setData] = useState(offersData);


    return (

        <>
            <section className="offers-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="offers-header">
                                <h1> Recommended Offers</h1>
                            </div>

                            <Container>
                                <Row>
                                    {
                                        data.map(item => {
                                            return (
                                                <Col xs={12} sm={6} md={4} lg={4} key={item.id}>
                                                    <div className="card offer--cards" >
                                                        <img src={item.img} className='offer-image' alt={item.alt}/>
                                                        <div className="offer-details">
                                                            <h6>{item.title}</h6>
                                                            <span>{item.description}</span>
                                                        </div>
                                                        <div className="offer-prices">
                                                            <p>from  <span> LKR ${item.price} </span>onwards </p>
                                                            <Button className="offers-details-btn">
                                                                View Details
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>

                                <Link path='/offers' style={{ color: "goldenrod", fontSize: "1.5rem" }}> View all </Link>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                {/* <Button className="view-all-btn"> View All </Button> */}
                {/* view all button to be add which will link to the all cards */}
            </section>

        </>
    )
}
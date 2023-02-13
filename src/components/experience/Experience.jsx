import React, { useState } from "react";
import './experience.css';
import Data from '../../Data/experienceData';
import { Container, Row, Col } from 'react-bootstrap';


export default function Experience() {

    const [data, setData] = useState(Data);

    return (

        <>
            <section className="experience-section">
                <Container >
                    <Row>
                        <Col>
                            <div className="experience-header-section ms-3">
                                <h1> Experience Something New </h1>
                                <p>Find the perfect stay with our exclusive deals.</p>
                            </div>

                            <Container fluid className="grid-container">
                                <Row>
                                    {
                                        Data.map(item => {
                                            return (
                                                <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                                                    <div className="card card-container" key={item.id}>
                                                        <img src={item.img} className='card-image' alt={item.title} />
                                                        <div className='overlay'>
                                                            <h5>{item.title}</h5>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Container>

                        </Col>
                    </Row>


                </Container>
            </section>

        </>
    )
}
import React, { useState } from "react";
import './destination.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import data from '../../Data/destinationData'


export default function Destination() {

  const [selectedImageId, setSelectedImageId] = useState(1);
  const [destinationData, setDestinationData] = useState(data);

  return (
    <>
      <section className="destination-section">
        <div className="top-image">
          <img src='./images/footer/make-yourself-pattern1.png' alt="pattern"/>

        </div>
        <Container>
          <Row>
            <Col>
              <div className="destination-header">
                <h1> Our Destinations </h1>
              </div>

              <Container>
                <div className="destination-body">
                  <select
                    value={selectedImageId}
                    onChange={e => setSelectedImageId(Number(e.target.value))}
                    className='select-bar'
                  >
                    {destinationData.map(image => (

                      <option key={image.id} value={image.id} className='destination-options'>
                        {image.name}
                      </option>

                    ))}
                  </select>
                  <br />
                  <br />
                  <div className="destination-desc">
                    <div className="country-country-section">
                      <img
                        src={destinationData.find(image => image.id === selectedImageId).country_img}
                        className='country-image'
                      />
                    </div>

                    <img
                      src={destinationData.find(image => image.id === selectedImageId).location_img}
                      alt={destinationData.find(image => image.id === selectedImageId).alt}
                      className='location-image'
                    />

                    <div className="destination-facts-section">
                      <h4>{destinationData.find(image => image.id === selectedImageId).name}</h4>
                      <p>{destinationData.find(image => image.id === selectedImageId).desc}</p>
                      <Button> Discover More </Button>
                    </div>
                  </div>
                </div>

              </Container>

            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}
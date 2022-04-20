import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

import slideOne from "../../assets/carrousel1.jpg";
import slideTwo from "../../assets/carrousel2.jpg";
import slideThree from "../../assets/cardThree.jpg";

const CarouselHome = () => {
  return (
    <div className="carousel">
      <Carousel controls={false} indicators={false} autoPlay={true}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slideOne}
            alt="First slide"
            height="550"
          />
          <Carousel.Caption>
            <div className="container">
              <h1 className="d-flex justify-content-center align-items-center">
                DIVERSIÓN SIN LÍMITES
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slideTwo}
            alt="Second slide"
            height="550"
          />
          <Carousel.Caption>
            <div className="container">
              <h1 className="d-flex justify-content-center align-items-center">
                DIVERSIÓN SIN LÍMITES
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="Third slide"
            height="550"
          />
          <Carousel.Caption>
            <div className="container">
              <h1 className="d-flex justify-content-center align-items-center">
                DIVERSIÓN SIN LÍMITES
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;

import React from "react";
import imag7 from "./images/imag7.jpg";
import imag12 from "./images/imag12.jpg";
import imag9 from "./images/imag9.jpg";
import styled from 'styled-components';

const Imag = styled.img`
   height: 100vh;
   width: 100%;
`;
const CarC = styled.div`
    bottom: 220px;
    z-index: 2;
`;
const Head = styled.h5`
    font-size: 85px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: 'Moon Dance', cursive;
`;
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 18px;
    line-height: 1.9;
`;
const A = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    padding: 5px 20px;
    display: inline-block;
    color: #fff;
    margin-top: 15px;
    border-radius: 5px;
`;

export const Slider03 = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Imag src={imag7} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Slider <span className="text-warning"> One item</span></Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className="bg-warning text-white">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={imag12} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Slider <span className="text-warning">Two item</span></Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className="bg-warning text-white">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={imag9} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head>Slider <span className="text-warning">Three item</span></Head>
             <Par>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className="bg-warning text-white">Learn More</A>
          </CarC> 
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


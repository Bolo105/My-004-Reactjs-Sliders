import React from 'react'
import imag1 from './images/imag1.jpg';
import imag2 from './images/imag2.jpg';
import imag3 from './images/imag3.jpg';
import styled from 'styled-components';

const CarI = styled.div`
    height: 100vh;
	min-height: 300px;
`;
const CarC = styled.div`
    bottom: 220px;
`;
const Head = styled.h5`
    font-size: 45px;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-top: 25px;
	font-family: 'Quicksand', sans-serif;
`;
const Par = styled.p`
    width: 60%;
	margin: auto;
	font-size: 18px;
	line-height: 1.9;
	font-family: poppins;
`;
const A = styled.a`
    text-transform: uppercase;
    text-decoration: none;
	background: #262626;
	padding: 10px 30px;
	display: inline-block;
	color: #fff;
	margin-top: 15px;
`;

export const Slider01 = () => {
  return (
    
    <div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
		<div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div className="carousel-inner">
			<CarI className="carousel-item active">
				<img alt="First slide" className="d-block w-100" src={imag1} />
				<CarC className="carousel-caption d-none d-md-block">
					<Head className="animated bounceInRight">Web Development</Head>
					<Par className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
					<p className="animated bounceInRight"><A href="/">More Info</A></p>
				</CarC>
			</CarI>
			<CarI className="carousel-item">
				<img alt="Second slide" className="d-block w-100" src={imag2} />
				<CarC className="carousel-caption d-none d-md-block">
					<Head className="animated slideInDown">web design</Head>
					<Par className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
					<p className="animated zoomIn"><A href="/">More Info</A></p>
				</CarC>
			</CarI>
			<CarI className="carousel-item">
				<img alt="Third slide" className="d-block w-100" src={imag3} />
				<CarC className="carousel-caption d-none d-md-block">
					<Head className="animated zoomIn">Digital Marketing</Head>
					<Par className="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</Par>
					<p className="animated zoomIn"><A href="/">More Info</A></p>
				</CarC>
			</CarI>
		</div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
	</div>

  )
}


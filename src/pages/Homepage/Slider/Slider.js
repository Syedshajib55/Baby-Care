import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
// ..
AOS.init();

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    // data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='300'
    return (
        <div>
            <Slider {...settings}>
                <div className='slider-bg slide-1 slider-box bg-opacity-50 bg-blend-overlay'>
                    {/* <div className="hero-text text-center mb-5 md:mb-0">
                         { <h2 className='text-3xl lg:text-6xl font-medium capitalize mb-5 text-white'>Best car solution and sales available</h2> }
                        <p className='md:font-medium mb-5 text-white'>We are a company who sales latest brand car from direct car company.A lot of car collection is available at our showroom.We are a renowned company all over the world for car wholesale.</p> 
                    </div> */}
                </div>
                <div className='slider-bg slide-2 slider-box bg-opacity-50 bg-blend-overlay'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        
                    </div>
                </div>
                <div className='slider-bg slide-3 slider-box bg-opacity-50 bg-blend-overlay'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        
                    </div>
                </div>
                <div className='slider-bg slide-4 slider-box bg-opacity-50 bg-blend-overlay'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        
                    </div>
                </div>
                <div className='slider-bg slide-5 slider-box bg-opacity-50 bg-blend-overlay'>
                    <div className="hero-text text-center mb-5 md:mb-0">
                        
                    </div>
                </div>
            </Slider>
           
        </div>
    );
};

export default Hero;
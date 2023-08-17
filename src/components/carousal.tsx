"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveCarousal = ({children,arrow,dots,slidetoshow,autoplay}:any) => {
  const settings = {
    dots: dots,
    infinite: true,
    arrows: arrow,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    slidesToShow: slidetoshow,
    slidesToScroll: 1,
    centerMode:false,
    responsive: [      
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }
  return (
    <div>
       <Slider {...settings}>
        {children}
          {/* <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div> */}
        </Slider>
    </div>
  )
}

export default ResponsiveCarousal
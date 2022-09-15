import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../css-lib/SlideViewAuto.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SlideViewAuto(){
  const [artworks, setArtworks]= useState([]);
  const getArtwokrs = async () =>{
    const json =await (
      await fetch(
        'https://api.jaehyunking.com/artwork/list'
      )
    ).json();
    setArtworks(json);
  };
  useEffect(()=>{
    getArtwokrs();
  },[]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    width:100,
    autoplay:true,
    autoplaySpeed:0,
    speed:10000,
    cssEase:"linear"
  };

  const state={
    display: true,
    width: 100,
  }
    return (
      <div className="Slide_Con">
        <div>
        <Slider {...settings}
        >
          {artworks && artworks.map(artworks => {
            return (
              <div>
                <a href="">
                <img src={artworks.artworkImg} />
                </a>
                <p>{artworks.artworkName}</p>
              </div>
            )
          })}
        </Slider>
        </div>
      </div>
    );
  }

  export default SlideViewAuto;
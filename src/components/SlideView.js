import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css-lib/SlideView.css';

function SlideView(){
  const [artworks, setArtworks]= useState([]);
  const getArtwokrs = async () =>{
    const json =await (
      await fetch(
        'http://15.164.134.237:8080/artwork/list'
      )
    ).json();
    setArtworks(json);
  };
  useEffect(()=>{
    getArtwokrs();
  },[]);

  console.log(artworks);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    width:100,
    variablewWidth:true,
    gap:10,
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
              <div
              key={artworks.artworkNum}>
                <Link to={`/ArtworkPage/${artworks.artworkNum}`}>
                <img src={artworks.artworkImg} />
                </Link>
                <p className="artworkNameScroll">{artworks.artworkName}</p>
                <p className="artistNameScroll">{artworks.artistName}</p>
              </div>
            )
          })}
        </Slider>
        </div>
      </div>
    );
  }

  export default SlideView;
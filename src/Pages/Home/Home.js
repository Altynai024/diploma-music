import React, { useState } from "react";
import "./Home.css";
// import AddCategory from '../../Components/AddCategory';
// import CategoryList from '../../Components/CategoryList';
import watch from "../../img/home.jpg";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/8d/fb/a8/8dfba8b9535ab4a424da0e4babd093a6.jpg",
    "https://i.pinimg.com/564x/1c/5d/7d/1c5d7daaf31dd1b0e5423a3f5f6b3d7b.jpg",
    "https://i.pinimg.com/564x/ff/1e/df/ff1edf1f732d7cf68397b2c06f89e11b.jpg",
    "https://i.pinimg.com/564x/60/f6/43/60f643df92730a3adf9fda3707876fe5.jpg",
    "https://i.pinimg.com/564x/91/17/2d/91172d50f8a5107000470baf9b3ff3e0.jpg",
    "https://i.pinimg.com/564x/d6/62/e6/d662e6c9bc91c5bcd0d3c769096be59e.jpg",
    "https://i.pinimg.com/564x/69/17/6d/69176df606371e989ce5977f77b81a73.jpg",
    // Replace this URL with the URL of the next image
    // Add other image URLs as needed
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down, go to the next image or loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (delta < 0) {
      // Scroll up, go to the previous image or loop back to the last image
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Home" onWheel={handleScroll}>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${
              index === currentImageIndex ? "active-in-home" : ""
            }`}
            src={image}
            alt="background"
          />
        ))}
        <button className="arrow prev" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="arrow next" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <div className="div-of-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={`dot ${
              index === currentImageIndex ? "active-in-home" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
      <h1 className="h1-for-the-card"></h1>
      <div className="div-for-the-card">
        <div className="video">
          <video className="video" width="1000" height="650" src={watch} controls></video>
        </div>
      </div>
      {/* <AddCategory/>
      <CategoryList/> */}
    </div>
  );
}

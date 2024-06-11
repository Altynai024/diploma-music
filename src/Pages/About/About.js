import React from "react";
import "./About.css";
import CircleIcon from "../../img/circle-fill.png";
import About_1 from "../../img/About-1.jpg";

export default function MainAbout() {
  return (
    <div className="company-info">
      <div className="Main-About">
        <div className="about-text">
          <h2>Welcome to </h2>
          <p>
          Open the door to the world of music with our online musical instrument store! Whether you're a beginner musician or a
           seasoned professional, you'll find everything you need to bring your musical ideas to life with us.
          </p>
          <p>
          Choose from a wide range of guitars, drums, keyboards,
           wind instruments, and string instruments - we have everything for every genre and skill level.
          </p>
          <p>
          Experience the convenience and safety of online shopping with our fast and reliable delivery service.
           We take pride in our high level of customer service and strive to make your musical journey enjoyable and exciting.
          </p>
        </div>
      </div>
      <div className="elementor">
        <div className="block-1">
          <h2>Our team</h2>
          <p>
            We are a team of professional and skilled experts in all domestic
            spheres. We offer a wide range of services and at the same time we
            are always glad to help you with any unconventional household needs:
          </p>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>exclusive designs;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>decor elements</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>textile and interior;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>enlightenment;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>modern instruments</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>quality tools;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>.</span>
          </div>
        </div>
        <div className="About-photo">
          <img className="About-1" src={About_1} alt="About" />
        </div>
      </div>
    </div>
  );
}
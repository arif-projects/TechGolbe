import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="description text-start">
            <div className="discription-image">
              <img src="https://i.ibb.co/J3WrPpW/Vector.png" alt="" />
            </div>
            <h2 className="banner-title">
              Welcome to <br /> <span className="brand">Globetech</span>.
            </h2>
            <p>
              We are committed to deliver best IT services. Our Consultants have
              experience in working with clients. We have extensive experience
              in the software application space and also offer a broad range and
              depth of technology.
            </p>
            <div className="banner-btn">
              <button className="btn-1">Support us</button>{" "}
              <button className="btn-2">Our Mission</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="image-container">
            <img src="https://i.ibb.co/xHDS9wD/pic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

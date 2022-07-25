import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div className="service col-md-4 col-sm-12 gy-3">
      <div className="card p-3">
        <img className="w-100" src={image} alt="" />
        <h4 className="mt-2 card-title">{name}</h4>

        <p className="px-3 card-description text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Service;

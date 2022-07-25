import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container services">
      <div className="discription-image service-vector">
        <img src="https://i.ibb.co/J3WrPpW/Vector.png" alt="" />
      </div>
      <div className="service-title">
        <h3 className="first-title">SERVICES</h3>
        <h3 className="second-title">We provides services to our clients</h3>
      </div>

      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

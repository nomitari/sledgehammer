import React, { useEffect, useState } from "react";

interface Props {}

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [];

const Services: React.FC<Props> = () => {
  return (
    <section id="services" className="content">
      <h3>SERVICES</h3>
      <div className="services-container">
        {/* {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={activeIndex === index ? "active" : ""}
          >
            <h4>{service.title}</h4>
          </div>
        ))} */}
        <p>
          Under construction. Please <a href="./contact">reach out</a> for
          more information about working with us.
        </p>
      </div>
    </section>
  );
};

export default Services;

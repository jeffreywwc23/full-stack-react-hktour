import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";

export const Services = () => {
  const servicesContent = useSelector(
    (state) => state.services?.servicesContent
  );

  return (
    <section className="services-container">
      <div className="services-wrapper">
        <div className="services-heading">
          <h1>
            <span>Ser</span>vices
          </h1>
          <p>We provide the best in class services for our customers</p>
        </div>

        <div className="services-box-container">
          {servicesContent?.map((singleService) => {
            return (
              <div className="services-box" key={singleService.id}>
                <div className="bar"></div>
                <LazyLoadImage
                  effect="blur"
                  src={singleService.imageUrl}
                  alt={singleService.title}
                />
                <h1 data-title={singleService.title} className="fill-text">
                  {singleService.title}
                </h1>
                <p>{singleService.text}</p>
                <Link to="/" className="services-btn">
                  More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./OverviewCards.css";
import Date from "../Date/Date";
import { IoMdMap, IoIosCalendar, IoIosPin, IoIosPerson } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function OverviewCards({ ...item }) {
  const {
    _id,
    name,
    imageCover,
    subheading,
    summary,
    startLocation,
    startDates,
    locations,
    maxGroupSize,
    price,
    ratingsAverage,
    ratingsQuantity,
  } = item;

  //   console.log("item = ", item);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-picture">
          <div className="card-picture-overlay">&nbsp;</div>
          <LazyLoadImage
            effect="blur"
            className="card-picture-img"
            alt="tour-overview-card-image-cover"
            src={`assets/img/tours/${imageCover}`}
          />
        </div>

        <h3 className="card-heading">
          <span>{name}</span>
        </h3>
      </div>

      <div className="card-details">
        <h4 className="card-sub-heading">{subheading}</h4>
        <p className="card-text">{summary}</p>
        <div className="card-data">
          <IoMdMap className="card-icon" />
          <span>{startLocation.description}</span>
        </div>
        <div className="card-data">
          <IoIosCalendar className="card-icon" />
          <span>
            <Date startDates={startDates[0]} />
          </span>
        </div>
        <div className="card-data">
          <IoIosPin className="card-icon" />
          <span>{locations.length} stops</span>
        </div>
        <div className="card-data">
          <IoIosPerson className="card-icon" />
          <span>{maxGroupSize}</span>
        </div>
      </div>

      <div className="card-footer">
        <p>
          <span className="card-footer-value">${price}</span>
          <span className="card-footer-text">per person</span>
        </p>
        <p className="card-ratings">
          <span className="card-footer-value">{ratingsAverage}</span>
          <span className="card-footer-text">{`rating (${ratingsQuantity})`}</span>
        </p>
        <Link
          className="btn btn--small"
          params={{
            _id: _id,
          }}
          to={`/tours/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default OverviewCards;

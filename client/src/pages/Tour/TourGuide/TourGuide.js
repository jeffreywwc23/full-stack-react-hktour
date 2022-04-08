import React from "react";

const TourGuide = () => {
  return (
    <div className="overview-box-group">
      <h2 className="heading-secondary section-description-heading-bottom">
        Your tour guides
      </h2>

      <div className="overview-box-detail">
        <img
          src={"/assets/img/users/user-17.jpg"}
          alt="overview-box-guide 1"
          className="overview-box-img"
        />
        <span className="overview-box-label">Lead guide</span>
        <span className="overview-box-text">Jack Hamme</span>
      </div>

      <div className="overview-box-detail">
        <img
          src={"/assets/img/users/user-18.jpg"}
          alt="overview-box-guide 2"
          className="overview-box-img"
        />
        <span className="overview-box-label">Tour guide</span>
        <span className="overview-box-text">Chris Scott</span>
      </div>

      <div className="overview-box-detail">
        <img
          src={"/assets/img/users/user-19.jpg"}
          alt="overview-box-guide 3"
          className="overview-box-img"
        />
        <span className="overview-box-label">Intern</span>
        <span className="overview-box-text">Peter Smith</span>
      </div>
    </div>
  );
};

export default TourGuide;

import React, { memo } from "react";
import "./FeatureTours.css";
import FeatureTourItem from "./FeatureTourItem/FeatureTourItem";
import { useSelector } from "react-redux";

function FeatureTours() {
  const featureToursContent = useSelector(
    (state) => state.featureTours.featureToursContent
  );

  const featureToursContentFirstTwo = [...featureToursContent].splice(0, 2);
  const featureToursContentRest = [...featureToursContent].splice(2, 4);

  return (
    <div className="feature-tours">
      <h1>Check Out Our Featured Tours</h1>
      <div className="feature-tours-container">
        <div className="feature-tours-wrapper">
          <ul className="feature-tours-items">
            {featureToursContentFirstTwo.map((tour) => {
              return (
                <FeatureTourItem
                  key={tour.id}
                  src={tour.imageUrl}
                  text={tour.text}
                  label={tour.label}
                  path="/tours"
                />
              );
            })}
          </ul>
          <ul className="feature-tours-items">
            {featureToursContentRest.map((tour) => {
              return (
                <FeatureTourItem
                  key={tour.id}
                  src={tour.imageUrl}
                  text={tour.text}
                  label={tour.label}
                  path="/tours"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(FeatureTours);

import React from "react";
import "./BoxModel.css";
import { useSelector } from "react-redux";

function BoxModel() {
  const boxContent = useSelector((state) => state.boxModel.boxContent);

  return (
    <section className="box-wrapper">
      <div className="box-container">
        {boxContent.map((boxCard) => {
          return (
            <div className="card" key={boxCard.id}>
              <div className="imgBox">
                <img src={boxCard.imageUrl} alt={boxCard.title} />
              </div>
              <div className="content">
                <div>
                  <span className="color-text">{boxCard.title}</span>
                  <p>{boxCard.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BoxModel;

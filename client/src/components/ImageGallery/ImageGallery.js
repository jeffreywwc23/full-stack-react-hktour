import React from "react";
import "./ImageGallery.css";
import { useSelector } from "react-redux";

function ImageGallery() {
  const imageGalleryContent = useSelector(
    (state) => state.imageGallery?.imageGalleryContent
  );

  return (
    <>
      <div className="image-gallery-container">
        {imageGalleryContent.map((singleImageGallery) => {
          return (
            <figure className="image-figure" key={singleImageGallery.id}>
              <img
                src={singleImageGallery.imageUrl}
                alt={singleImageGallery.title}
              />
              <figcaption>
                <div>
                  <h2>{singleImageGallery.title}</h2>
                </div>
                <div>
                  <h3>{singleImageGallery.label}</h3>
                  <h3>{singleImageGallery.hoverLabel}</h3>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}

export default ImageGallery;

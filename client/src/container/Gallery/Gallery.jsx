import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const handleScroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          voluptas fugit alias vel non libero voluptate ducimus sed sunt. Minus
          culpa voluptatum minima velit possimus obcaecati consequuntur
          repudiandae. Pariatur, sed.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((item, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image_${index}`}
            >
              <img src={item} alt="gallery" />
              <BsInstagram className="gallery__images-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import "./AwardCard.css";

const AwardCard = ({ award }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={award.imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {award.title}
        </p>
        <p className="p__cormorant">{award.subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;

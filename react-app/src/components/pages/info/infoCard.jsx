import React from "react";
import PropTypes from "prop-types";
import MyMarkdownText from "../../myMarkdownText"
import "./infoCard.sass";

const InfoCard = ({ info }) => (
  <div className="info-card light-box">
    <div className="title">
      <h3>{info.Title}</h3>
      <img src={info.Icon.url} alt={info.Icon.name} />
    </div>

    <div className="content">
      <MyMarkdownText src={info.Content} />
    </div>
  </div>
);

export default InfoCard;

InfoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

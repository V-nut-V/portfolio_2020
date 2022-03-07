import React from "react";
import MyImg from "../../../myImg";
import dateFormat from "dateformat"
import PropTypes from "prop-types"
import "./card.sass";

const Card = ({ work, onShowWorkDetail }) => {
  return (
    <div
      className="content-card light-box"
      onClick={() => onShowWorkDetail(work)}
    >
      <MyImg
        formats={work.ContentMedias[0].formats}
        name={work.ContentMedias[0].name}
      />
      <div className="bot-bar">
        <img
          src={work.IconImage.formats.thumbnail.url}
          alt={work.IconImage.formats.thumbnail.name}
        />
        <h3>{work.Title}</h3>
        <h5>{dateFormat(work.Date, "mmm yyyy")}</h5>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  work: PropTypes.object.isRequired,
  onShowWorkDetail: PropTypes.func.isRequired
};
import React from 'react'
import PropTypes from "prop-types"
import "./tabTag.sass"

const TabTag = ({title, image}) => {

  return (
    <div className="tab-tag">
      <img src={image.url} alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default TabTag


TabTag.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
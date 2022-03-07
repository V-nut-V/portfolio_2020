import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import dateFormat from "dateformat";
import PropTypes from "prop-types"
import MyMarkdownText from '../../../myMarkdownText';
import { TagsFilled, BgColorsOutlined  } from "@ant-design/icons";
import LazyLoad from "react-lazyload";
import "./cardDetail.sass";


const CardDetail = ({ work, handleClose }) => {
  const mainCarousel = useRef(null);
  const navCarousel = useRef(null);

  useEffect(() => {
    navCarousel.current.slickGoTo(0);
  });

  const mainCarouselSettings = {
    dots: false,
    arrows: false,
    draggable: true,
    slidesToShow: 1,
    infinite: true,
  };

  const navCarouselSettings = {
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    focusOnSelect: true,
    variableWidth: true,
    swipeToSlide: true,
    draggable: true,
    infinite: false,
  };

  return (
    <div className="card-detail">
      <div className="top-bar">
        <img
          src={work.IconImage.formats.thumbnail.url}
          alt={work.IconImage.name}
        />
        <h3>{work.Title}</h3>
      </div>

      <div className="carousel-sliders">
        <Slider
          {...mainCarouselSettings}
          ref={mainCarousel}
          beforeChange={(_, newIndex) => {
            navCarousel.current.slickGoTo(newIndex);
          }}
          className="main-carousel"
        >
          {work.ContentMedias.map((media) => (
            <LazyLoad>
              <img key={media.id} src={media.url} alt={media.name} />
            </LazyLoad>
          ))}
        </Slider>

        <Slider
          {...navCarouselSettings}
          ref={navCarousel}
          beforeChange={(_, newIndex) => {
            mainCarousel.current.slickGoTo(newIndex);
          }}
          className="nav-carousel"
        >
          {work.ContentMedias.map((media) => (
            <img
              key={media.id}
              src={media.formats.thumbnail.url}
              alt={media.name}
            />
          ))}
        </Slider>
      </div>

      <div className="date">
        <span>{dateFormat(work.Date, "mmm yyyy")}</span>
      </div>

      <div className="body-content">
        <div className="labels">
          <div className="tags-wrapper">
            <div className="label-rapper light-box">
              <TagsFilled />
            </div>
            <div className="tags">
              {work.Tags.map((tag) => (
                <span key={tag.id}>{tag.tag}</span>
              ))}
            </div>
          </div>
          <div className="colors-wrapper">
            <div className="label-rapper light-box">
              <BgColorsOutlined />
            </div>
            <div className="colors">
              {work.Colors.map((color) => (
                <span style={{ backgroundColor: `#${color.tag}` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="description">
          <MyMarkdownText src={work.Description} />
        </div>
      </div>
      <button className="close-btn light-box" onClick={() => handleClose()}>Close</button>
    </div>
  );
};

export default CardDetail;

CardDetail.propTypes = {
  work: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};
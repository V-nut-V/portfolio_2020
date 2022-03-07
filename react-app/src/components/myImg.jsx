import React from "react";
import LazyLoad from "react-lazyload"

const MyImg = ({ formats, name }) => {

  if (!formats) return <div></div>

  return (
    <LazyLoad>
      <picture>
        {formats.large ? (
          <source srcSet={formats.large.url} media="(min-width: 600px)" />
        ) : null}

        {formats.medium ? (
          <source srcSet={formats.medium.url} media="(min-width: 350px)" />
        ) : null}

        {formats.small ? (
          <source srcSet={formats.small.url} media="(min-width: 200px)" />
        ) : null}

        <img src={formats.thumbnail.url} alt={name} />
      </picture>
    </LazyLoad>
  );
};

export default MyImg;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ImageLoader = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};

ImageLoader.propTypes = {
  placeholderSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageLoader;

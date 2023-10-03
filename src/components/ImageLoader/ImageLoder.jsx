import PropTypes from "prop-types"; // Import PropTypes
import { useState, useEffect } from "react";

const ImageLoader = ({ placeholderSrc, src, alt, ...props }) => {
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
      {...{ src: placeholderSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};

// Define prop types to validate the props
ImageLoader.propTypes = {
  placeholderSrc: PropTypes.string.isRequired, // placeholderSrc should be a string and required
  src: PropTypes.string.isRequired, // src should be a string and required
  alt: PropTypes.string, // alt is optional and should be a string
};

export default ImageLoader;

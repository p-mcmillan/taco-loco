// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";

// const ImageLoader = ({ placeholderSrc, src, ...props }) => {
//   const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       setImgSrc(src);
//     };
//   }, [src]);

//   return (
//     <img
//       {...{ src: imgSrc, ...props }}
//       alt={props.alt || ""}
//       className="image"
//     />
//   );
// };

// ImageLoader.propTypes = {
//   placeholderSrc: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
// };

// export default ImageLoader;

import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";

const ImageLoader = ({
  placeholderSrc,
  src,
  alt = "",
  className = "",
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  const img = useMemo(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImgSrc(src);
    };
    return image;
  }, [src]);

  return (
    <img {...rest} src={imgSrc} alt={alt} className={`image ${className}`} />
  );
};

ImageLoader.propTypes = {
  placeholderSrc: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ImageLoader;

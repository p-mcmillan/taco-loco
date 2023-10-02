import heroImg from "../../assets/images/IMG_6187.png";

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${heroImg})`, // Replace with the actual path to your image file
    backgroundSize: "200%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "592px", // Set the desired height of your hero div
    color: "white", // Set the text color for better visibility
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={divStyle}></div>;
};

export default Hero;

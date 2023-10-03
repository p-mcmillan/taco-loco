import heroImg2 from "../../assets/images/IMG_6147.png";

const Hero2 = () => {
  const divStyle2 = {
    backgroundImage: `url(${heroImg2})`, // Replace with the actual path to your image file
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    //width: "318px", // Set the width of your image
    //height: "414px", // Set the desired height of your hero div
    color: "white", // Set the text color for better visibility
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className="mt-6 md:mt-0 mx-9 md:mx-0 h-[414px] w-[318px] md:w-[467px] md:h-[765px]"
      style={divStyle2}
    ></div>
  );
};

export default Hero2;

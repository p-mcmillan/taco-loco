import PropTypes from "prop-types";

const PopUp = ({ openPopUp, closePopUp, image }) => {
  const handleLosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (!openPopUp || !image) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handleLosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full h-full p-3 justify-center items-center">
          <img
            src={image.url}
            alt={`popup-image-${image.id}`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  openPopUp: PropTypes.bool.isRequired,
  closePopUp: PropTypes.func.isRequired,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default PopUp;

import PropTypes from "prop-types";

const Button = ({ children, style, onClick }) => {
  return (
    <button
      className="text-white px-6 py-2 uppercase"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func, // Define prop validation for onClick
};

export default Button;

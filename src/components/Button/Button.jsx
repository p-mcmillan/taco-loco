import PropTypes from "prop-types";

const Button = ({ children, style, onClick }) => {
  return (
    <button
      className="text-white font-Helvetica md:text-[19px] font-bold text-[17px] px-6 py-2 uppercase bg-orangeTaco md:h-[51px] md:w-[240px] h-[42px] w-[196px]"
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
  onClick: PropTypes.func,
};

export default Button;

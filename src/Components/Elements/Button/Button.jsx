const Button = ({ title, type, onClick, disabled }) => {
  return (
    <button
      className={`bg-primary w-full h-10 mt-2 mb-4 rounded-full text-white text-base font-semibold uppercase hover:opacity-75`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "Default Title",
  type: "button",
  textColor: "black",
};
export default Button;

const Button = ({ title, color, textColor, disabled, type, onClick }) => {
  return (
    <button
      className={`w-full h-9 p-5 flex items-center justify-center bg-[${color}] rounded-lg border border-primary border-solid text-${textColor} font-semibold uppercase tracking-[2px]`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "Default Title",
  type: "button",
  color: "blue-500",
  textColor: "black",
};
export default Button;

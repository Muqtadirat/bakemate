import clsx from "clsx";

const Button = ({ type, children, variant, className, onClickHandler }) => {
  const baseStyle = "border-2 py-2 w-full rounded-lg";

  const variantStyles = {
    primary: "text-white bg-primary-300",
    secondary: "text-gray-900 bg-lime-600",
    unique: "text-purple-900 bg-lime-600",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <button type={type} className={customStyle} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;

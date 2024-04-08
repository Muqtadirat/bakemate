import clsx from "clsx";

const Button = ({
  type,
  children,
  disabled,
  variant,
  className,
  onClickHandler,
}) => {
  const baseStyle =
    "border-2 border-transparent py-2 rounded-lg transition-all delay-75 ease-in duration-300 hover:scale-105";

  const variantStyles = {
    primary:
      "text-white bg-primary-800 rounded px-4 hover:text-primary-800 hover:bg-white hover:border-2 hover:border-primary-800",
    secondary: "text-gray-900 bg-lime-600",
    unique: "text-purple-900 bg-lime-600",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <button
      type={type}
      disabled={disabled}
      className={customStyle}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;

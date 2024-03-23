import clsx from "clsx";

const Input = ({
  type,
  id,
  name,
  placeholder,
  label,
  onChangeHandler,
  value,
  className,
  variant,
}) => {
  const baseStyle = "w-full py-2 px-2 border-2 border-gray-700  rounded-lg";

  const variantStyles = {
    primary:
      "focus:outline-none focus:ring-1 focus:border-primary-200 focus:ring-primary-200",
    search: "w-[25rem]",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={customStyle}
        autoComplete="on"
      />
    </div>
  );
};

export default Input;

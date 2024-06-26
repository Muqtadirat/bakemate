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
  labelClass,
}) => {
  const baseStyle = "py-2 px-2 border-grey-300 border-2 w-full  rounded-lg";

  const variantStyles = {
    primary:
      "focus:outline-none focus:ring-1 focus:border-primary-800 focus:ring-primary-800",
    table: "rounded-none border-y-0 border-x-0 outline-0 focus:border-b-2 border-b-primary-800",
    search:
      "w-[25rem] border-grey-300 focus:outline-none focus:border-primary-800 focus:ring-primary-800",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClass}>
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

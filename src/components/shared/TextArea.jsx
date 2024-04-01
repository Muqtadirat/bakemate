import clsx from "clsx";

const TextArea = ({
  id,
  name,
  placeholder,
  label,
  onChangeHandler,
  value,
  className,
  variant,
  labelClass,
  rows,
  cols,
}) => {
  const baseStyle = "py-2 px-2 border-2 border-grey-300 rounded-lg";

  const variantStyles = {
    primary:
      "focus:outline-none focus:ring-1 focus:border-primary-800 focus:ring-primary-200",
  };

  const variantStyle = variantStyles[variant] || "";

  const customStyle = clsx(baseStyle, variantStyle, className);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={customStyle}
        rows={rows}
        cols={cols}
        autoComplete="on"
      />
    </div>
  );
};

export default TextArea;

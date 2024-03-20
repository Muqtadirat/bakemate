const Input = ({
  type,
  id,
  name,
  placeholder,
  label,
  onChangeHandler,
  value,
  className,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={className}
      />
    </div>
  );
};

export default Input;

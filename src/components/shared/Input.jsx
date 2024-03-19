function Input({
  type,
  id,
  name,
  placeholder,
  label,
  onChangeHandler,
  value,
  className,
}) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={className}
      />
    </label>
  );
}

export default Input;

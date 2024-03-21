const CheckBox = ({ value, id, name, children, className, onClickHandler }) => {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} />
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        className={className}
        onClick={onClickHandler}
      />
      {""}
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;

const Select = ({ label, id, name, children, onChangeHandler }) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <select
          name={name}
          id={id}
          onChange={onChangeHandler}
          className="py-3 px-3 border-2 w-full border-grey-300 rounded-lg"
        >
          {children}
        </select>
      </label>
    </div>
  );
};

export default Select;

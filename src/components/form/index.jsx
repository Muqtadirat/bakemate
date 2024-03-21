const Form = ({ action, children, method, onSubmit, className }) => {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmit}
      className={className}
    >
      {children}
    </form>
  );
};
export default Form;

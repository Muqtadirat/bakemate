const Form = ({ action, children, method, onSubmit }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
export default Form;

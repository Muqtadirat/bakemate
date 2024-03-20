import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      Home page
      <div>Welcome to the CRM I guess</div>
      <p>
        Go to <Link to="/login">Login</Link>{" "}
      </p>
    </>
  );
};

export default HomePage;

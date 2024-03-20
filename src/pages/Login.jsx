import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Form from "../components/form";
import { Input, Button } from "../components/shared";
import loginUser from "../lib/api/loginUser";
import CakeImg from "../assets/form-cake.png";

const Login = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //   const togglePasswordVisbility = () => {
  //     setShowPassword(!showPassword);
  //   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const data = await loginUser({
        email,
        password,
      });

      if (data.error) {
        toast.error("data.error", {
          position: "top-center",
        });
      } else {
        setFormData({});
        toast.success("Login successful", {
          position: "top-center",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login flex h-screen">
      <section className="w-3/5">
        <img src={CakeImg} alt="" className="h-full w-full object-cover" />
      </section>

      <section className=" w-screen border flex flex-col gap-10 justify-center items-center">
        <div className="md:w-[35rem] flex flex-col gap-10">
          <div>
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <Form
            action="/login"
            method="post"
            onSubmit={handleLogin}
            className="flex flex-col gap-4"
          >
            <Input
              type="text"
              label="Email Address"
              name="email"
              value={formData.email}
              onChangeHandler={handleInputChange}
              variant="primary"
              placeholder="Enter Email"
            />

            <div className="passwordBox">
              <Input
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChangeHandler={handleInputChange}
                variant="primary"
                placeholder="Enter Password"
              />
            </div>
            <p>
              <Link to="/resetPassword" className="hover:text-primary-300">
                Forgot Password?
              </Link>
            </p>

            <Button
              type="submit"
              variant="primary"
              className="mt-6 hover:bg-primary-600"
            >
              Login
            </Button>
          </Form>
        </div>

        <div>
          <p>Or continue with</p>
        </div>

        <p>
          {"Don't"} have an account?{" "}
          <Link
            to="/signup"
            className="text-primary-400 font-semibold hover:text-primary-600"
          >
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;

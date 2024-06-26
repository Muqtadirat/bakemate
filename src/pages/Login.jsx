import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import toast from "react-hot-toast";
import Form from "../components/form";
import { Input, Button } from "../components/shared";
import { Eye, EyeOff } from "lucide-react";
// import loginUser from "../lib/api/loginUser";
import CakeImg from "../assets/form-cake.png";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisbility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const { email, password } = formData;

  //   try {
  //     const data = await loginUser({
  //       email,
  //       password,
  //     });

  //     if (data.error) {
  //       toast.error(data.error, {
  //         position: "top-center",
  //       });
  //     } else {
  //       setFormData({});
  //       toast.success("Login successful", {
  //         position: "top-center",
  //       });
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
const handleLogin = async (e) => {
  e.preventDefault();

  const { email, password } = formData;

  try {
       if (!email && !password) {
      toast.error("Please provide both email and password", {
        position: "top-center",
      });
      return;
    }

    setFormData({});
    toast.success("Login successful", { position: "top-center" });
    navigate("/dashboard");
   
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="Login flex h-screen">
      <section className="w-3/5">
        <img
          src={CakeImg}
          alt="Cupcake"
          className="h-full w-full object-cover "
        />
      </section>

      <section className="w-screen flex flex-col gap-5 justify-center items-center">
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
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChangeHandler={handleInputChange}
              variant="primary"
              placeholder="Enter Email"
            />

            <div className="passwordBox relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                value={formData.password}
                onChangeHandler={handleInputChange}
                variant="primary"
                placeholder="Enter Password"
              />

              <button
                onClick={togglePasswordVisbility}
                className="absolute top-6 bottom-0 right-0 pr-6"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p>
              <Link to="/resetPassword" className="hover:text-primary-300">
                Forgot Password?
              </Link>
            </p>

            <Button
              type="submit"
              variant="primary"
              disabled={!formData.email || !formData.password}
              className={clsx("mt-6", "hover:bg-primary-600", {
                "disabled:bg-red-800": !formData.email || !formData.password,
              })}
            >
              Login
            </Button>
          </Form>
        </div>

        <p>Or</p>

        <GoogleLogin />

        <p>
          {"Don't"} have an account? {""}
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

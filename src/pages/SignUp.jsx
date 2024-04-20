import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Form from "../components/form";
import registerUser from "../lib/api/registerUser";
import { Input, Button, CheckBox } from "../components/shared";
import { Eye, EyeOff } from "lucide-react";
import CakeImg from "../assets/form-cake.png";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisbility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupUser = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    try {
      const data = await registerUser({
        fullName,
        email,
        password,
        confirmPassword,
      });

      if (data.error) {
        toast.error(data.error, {
          position: "top-center",
        });
      } else {
        setFormData({});
        toast.success("Registration successful", {
          position: "top-center",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <section className="w-3/5">
        <img
          src={CakeImg}
          alt="Cupcake"
          className="h-full w-full object-cover "
        />
      </section>

      <section className="w-screen flex justify-center items-center">
        <div className="md:w-[35rem] flex flex-col gap-3">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Welcome to <span className="text-primary-300">Bakemate</span>,
            </h1>
            <p className="text-xl text-balance">
              Please fill out the form below to sign up and start managing your
              bakery business more efficiently.
            </p>
          </div>

          <Form
            action="/register"
            method="post"
            onSubmit={signupUser}
            className="flex flex-col gap-4"
          >
            <Input
              type="text"
              label="Full Name"
              value={formData.fullName}
              name="fullName"
              id="fullName"
              onChangeHandler={handleInputChange}
              variant="primary"
            />
            <Input
              type="email"
              label="Email Address"
              value={formData.email}
              name="email"
              id="email"
              onChangeHandler={handleInputChange}
              variant="primary"
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                value={formData.password}
                name="password"
                id="password"
                onChangeHandler={handleInputChange}
                variant="primary"
              />

              <button
                onClick={togglePasswordVisbility}
                className="absolute top-6 bottom-0 right-0 pr-6"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                value={formData.confirmPassword}
                name="confirmPassword"
                id="confirmPassword"
                onChangeHandler={handleInputChange}
                variant="primary"
              />

              <button
                onClick={togglePasswordVisbility}
                className="absolute top-6 bottom-0 right-0 pr-6"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <CheckBox
              onClickHandler={handleCheck}
              value={checked}
              className="accent-primary-300 w-4"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-primary-300 hover:text-primary-600"
              >
                terms of service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacyPolicy"
                className="text-primary-300 hover:text-primary-600"
              >
                privacy policy
              </Link>
            </CheckBox>

            <Button
              variant="primary"
              className="mt-3 font-medium hover:bg-primary-600"
            >
              Create Account
            </Button>
          </Form>

          <div className="self-center font-bold">
            <p>Or</p>
          </div>
          <GoogleLogin />

          <p>
            Already have an account? {""}
            <Link
              to="/"
              className="text-primary-400 font-semibold hover:text-primary-600"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

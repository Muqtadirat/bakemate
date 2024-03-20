import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Form from "../components/form";
import { Input, Button } from "../components/shared";
import loginUser from "../lib/api/loginUser";

const Login = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
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

    const { username, password } = formData;

    try {
      const data = await loginUser({
        username,
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
    <div className="Login flex flex-col">
      <Form action="/login" method="post" onSubmit={handleLogin}>
        <Input
          type="text"
          label="Username"
          name="username"
          value={formData.username}
          onChangeHandler={handleInputChange}
          className="rounded-md border"
        />

        <div className="passwordBox">
          <Input
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChangeHandler={handleInputChange}
            className="rounded-md border"
          />
        </div>

        <Button type="submit" variant="primary" className="">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

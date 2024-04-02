import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { ChevronLeft } from "lucide-react";
import Form from "src/components/form";
import registerSubser from "src/lib/api/registerSubUser";
import { Avatar } from "@radix-ui/themes";
import toast from "react-hot-toast";
import { Button, Input, Select, Dropzone } from "src/components/shared";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    role: "",
    gender: "",
    avatar: "",
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageDrop = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      avatar: files[0],
    }));
  };

  const isFormValid = Object.values(formData).every((value) => value !== "");

  const handleCreateSubUser = async (e) => {
    e.preventDefault();

    const { fname, lname, email, number, gender, role, avatar } = formData;

    try {
      const data = await registerSubser({
        fname,
        lname,
        email,
        number,
        gender,
        role,
       avatar,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setFormData({});
        toast.success("Sub seller added successfully");
        navigate("/settings");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <Button onClickHandler={goBack}>
          <ChevronLeft />
        </Button>

        <p className="ml-3 text-xl font-medium">Create new user</p>
      </div>

      <section className="mt-6 px-10 py-12 bg-white">
        <p className="font-medium text-xl">User details</p>

        <Form className="mt-12 flex flex-col gap-8 text-[#111111]/50">
          <div className="flex gap-14">
            <div className="w-full">
              <Input
                label="First Name"
                name="fname"
                id="fname"
                value={formData.fname}
                onChangeHandler={handleInputChange}
                variant="primary"
                className="border-gray-300 py-3"
              />
            </div>
            <div className="w-full">
              <Input
                label="Last Name"
                name="lname"
                id="lname"
                variant="primary"
                value={formData.lname}
                onChangeHandler={handleInputChange}
                className="border-gray-300 py-3"
              />
            </div>
          </div>

          <div className="flex gap-14">
            <div className="w-full">
              <Input
                label="Email Address"
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChangeHandler={handleInputChange}
                className="border-gray-300 py-3"
                variant="primary"
              />
            </div>
            <div className="w-full">
              <Input
                label="Phone Number"
                name="number"
                type="tel"
                id="number"
                value={formData.number}
                onChangeHandler={handleInputChange}
                className="border-gray-300 py-3"
                variant="primary"
              />
            </div>
          </div>

          <div className="flex gap-14">
            <div className="w-full">
              <Select
                label="Gender"
                id="gender"
                name="gender"
                value={formData.gender}
                onChangeHandler={handleInputChange}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                label="Role"
                id="role"
                name="role"
                value={formData.role}
                onChangeHandler={handleInputChange}
              >
                <option value=""></option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Select>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3">Profile Image</p>
            <Dropzone onDrop={handleImageDrop} />

            <div className="preview flex mt-3 gap-6 items-center">
              <p className="font-medium">Preview:</p>
              {formData.avatar && (
                <Avatar
                  src={URL.createObjectURL(formData.avatar)}
                  alt="User avatar"
                  radius="full"
                  size="5"
                />
              )}
            </div>
          </div>

          <div className="self-end">
            <Button
              variant="primary"
              type="submit"
              disabled={!isFormValid}
              className={clsx("px-6 font-medium", {
                "disabled:bg-grey-200": !isFormValid,
              })}
              onClickHandler={handleCreateSubUser}
            >
              Add User
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default CreateUser;

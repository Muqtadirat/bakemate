import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import Form from "src/components/form";
import { Button, Input } from "src/components/shared";

const CreateUser = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex items-center">
        <Button onClickHandler={goBack}>
          <ChevronLeft />
        </Button>

        <p className="ml-3 text-xl font-medium">Create new user</p>
      </div>

      <section className="mt-10 ml-10">
        <p className="font-medium">User details</p>

        <Form className="mt-8 flex flex-col gap-8">
          <div className="flex gap-28">
            <Input label="First Name" className="border-gray-300 w-96" />
            <Input label="Last Name" className="border-gray-300 w-96" />
          </div>

          <div className="flex gap-28">
            <Input label="Email Address" className="border-gray-300 w-96" />
            <Input label="Phone Number" className="border-gray-300 w-96" />
          </div>
        </Form>
      </section>
    </div>
  );
};

export default CreateUser;

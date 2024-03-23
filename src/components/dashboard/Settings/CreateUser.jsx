import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Form from "src/components/form";
import { Button } from "src/components/shared";

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
        <Form></Form>
      </section>
    </div>
  );
};

export default CreateUser;

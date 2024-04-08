import Form from "src/components/form";
import { Input } from "src/components/shared";

const Personal = () => {
  return (
    <>
      <Form>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Full Name"
              labelClass="text-black/50"
              name="fname"
              id="fname"
            />
          </div>
          <div className="w-full">
            <Input
              label="Email Address"
              labelClass="text-black/50"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Phone Number"
              labelClass="text-black/50"
              name="number"
              id="number"
            />
          </div>
          <div className="w-full">
            <Input
              label="Country"
              labelClass="text-black/50"
              name="country"
              id="country"
            />
          </div>
        </div>

        <p className="text-right text-primary-800 font-medium text-lg">Edit</p>
      </Form>
    </>
  );
};

export default Personal;

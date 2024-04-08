import Form from "src/components/form";
import { Input } from "src/components/shared";

const Business = () => {
  return (
    <>
      <Form>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Business Name"
              labelClass="text-black/50"
              name="bname"
              id="bname"
              type="text"
            />
          </div>
          <div className="w-full">
            <Input
              label="Business Email"
              labelClass="text-black/50"
              name="bEmail"
              id="bEmail"
              type="email"
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
              type="tel"
            />
          </div>
          <div className="w-full">
            <Input
              label="Address"
              labelClass="text-black/50"
              name="address"
              id="address"
              type="text"
            />
          </div>
        </div>

        <p className="text-right text-primary-800 font-medium text-lg hover:cursor-pointer">
          Edit
        </p>
      </Form>
    </>
  );
};

export default Business;

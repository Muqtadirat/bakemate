import Form from "src/components/form";
import { Input, Button } from "src/components/shared";

const Bank = () => {
  return (
    <>
      <Form>
        <div className="mb-[30px]">
          <div className="bankCard rounded-md border-2 border-primary-800 bg-peach-100 max-w-[462px] h-[125px] mb-[30px]"></div>
          <p className="text-lg font-medium text-primary-800">Add a new bank</p>
        </div>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Bank Name"
              labelClass="text-black/50"
              name="bname"
              id="bname"
              type="text"
            />
          </div>
          <div className="w-full">
            <Input
              label="Account Number"
              labelClass="text-black/50"
              name="accNumber"
              id="accNumber"
              type="number"
            />
          </div>
          
        </div>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Account Name"
              labelClass="text-black/50"
              name="accName"
              id="accName"
              type="text"
            />
          </div>
          <div className="w-full"></div>
        </div>

        <Button variant="primary">Add Bank</Button>
      </Form>
    </>
  );
};

export default Bank;

import ProductInfo from "./ProductInfo";
import Form from "src/components/form";
import { Input, Select, TextArea, Button } from "src/components/shared";

const AddOrder = () => {
  return (
    <div className="bg-white pt-4 pb-20 px-16">
      <p className="font-semibold text-xl mb-4">Create new order</p>
      <>
        <ProductInfo />
      </>

      <Form className="flex flex-col mt-6 gap-6">
        <p className="text-xl">{"Customer's"} Information</p>
        <div className="flex gap-16">
          <div className="w-full">
            <Input label="Name" type="text" className="py-3" />
          </div>
          <div className="w-full">
            <Input label="Phone number" type="tel" className="py-3" />
          </div>
        </div>

        <div className="flex gap-16">
          <div className="w-full">
            <Input label="Email Address" type="email" className="py-3" />
          </div>
          <div className="w-full">
            <Select label="Payment method">
              <option></option>
              <option>Credit card</option>
              <option>Cash on delivery</option>
              <option>Online payment</option>
            </Select>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="w-full">
            <Input label="Delivery address" type="text" className="py-3" />
          </div>

          <div className="w-full"></div>
        </div>

        <div className="border border-grey-200 w-full"></div>

        <div className=" w-1/2">
          <TextArea label="Special information" className="mb-6" rows={4} />
          <TextArea label="Order note" rows={4} className="mb-6" />

          <div className="flex items-center gap-3">
            <p className="font-semibold">Order status:</p>
            <div>
              <Select>
                <option></option>
                <option>Pending</option>
                <option>In progress</option>
                <option>Completed</option>
                <option>Canceled</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="self-end flex gap-10">
          <Button variant="secondary" className="font-medium">
            Cancel
          </Button>
          <Button variant="primary" className="font-medium">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddOrder;

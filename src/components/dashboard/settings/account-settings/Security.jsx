import Form from "src/components/form";
import { Input, Button } from "src/components/shared";

const Security = () => {
  return (
    <>
      <Form>
        <div className="flex gap-[60px] mb-[30px]">
          <div className="w-full">
            <Input
              label="Create New Password"
              labelClass="text-black/50"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <div className="w-full">
            <Input
              label="Confirm New Password"
              labelClass="text-black/50"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
            />
          </div>
        </div>

        <Button variant="primary">Save Password</Button>
      </Form>
    </>
  );
};

export default Security;

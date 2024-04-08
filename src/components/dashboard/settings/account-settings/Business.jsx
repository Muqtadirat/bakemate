import Form from "src/components/form"
import { Input } from "src/components/shared"

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
              />
            </div>
            <div className="w-full">
              <Input
                label="Business Email"
                labelClass="text-black/50"
                name="bEmail"
                id="bEmail"
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
                label="Address"
                labelClass="text-black/50"
                name="address"
                id="address"
              />
            </div>
          </div>

          <p className="text-right text-primary-800 font-medium text-lg">
            Edit
          </p>
        </Form>
      </>
    );
}

export default Business
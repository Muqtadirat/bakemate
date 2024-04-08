import Form from "src/components/form";
import { TextArea, Input, Button } from "src/components/shared";
import { Facebook, Twitter, Linkedin } from "src/icons";

const Support = () => {
  return (
    <div className="mt-10">
      <Form className="bg-white py-10 flex flex-col gap-[30px] px-[262px] border border-black/15">
        <h2 className="text-[28px] font-medium">Get in touch with us</h2>

        <div className="w-full">
          <Input
            label="Full Name"
            type="text"
            labelClass="text-black/50"
            id="fname"
            name="fname"
            className="py-3"
          />
        </div>
        <div className="w-full">
          <Input
            label="Email Address"
            type="email"
            labelClass="text-black/50"
            id="email"
            name="email"
            className="py-3"
          />
        </div>

        <div className="w-full">
          <TextArea
            label="Send us a note"
            labelClass="text-black/50"
            id="note"
            name="note"
            rows={8}
          />
        </div>

        <div>
          <Button variant="primary" type="submit">
            Send message
          </Button>
        </div>
      </Form>

      <div className="mt-8 flex justify-between text-black/50 font-medium">
        <p>Connect with us on our socials</p>
        <div className="flex gap-6 hover:cursor-pointer">
          <Twitter />
          <Linkedin />
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default Support;

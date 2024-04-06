import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchCustomers from "src/lib/api/fetchCustomers";
import { ChevronLeft } from "lucide-react";
import { Card } from "@radix-ui/themes";
import Feedback from "./Feedback";
import OrderHistory from "./OrderHistory";

const CustomerDetails = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const navigate = useNavigate()

  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="mt-8">
      <p className="flex gap-4 font-medium text-[22px] items-center relative">
        <span onClick={goBack} className="hover:cursor-pointer">
          <ChevronLeft />
        </span>
        Customers
      </p>

      <section className="mt-8 flex gap-8">
        <Card className="w-[250px]">
          <img
            src="https://i.pinimg.com/236x/06/f5/4e/06f54e0f48897f2c4e12a06f7af7eba5.jpg"
            alt="Customer"
          />
        </Card>

        <div className="self-end flex flex-col gap-5">
          <p>
            <span className="text-grey-400"> Customer’s Name:</span> Rosemarie
            Boyer DDS
          </p>
          <p>
            <span className="text-grey-400">Email:</span> me@myself.com
          </p>
          <p>
            <span className="text-grey-400"> Phone:</span> 692-584-6280
          </p>
          <p>
            <span className="text-grey-400">Address:</span> 65059 Hoppe Burgs
          </p>

          <p className="text-primary-800 hover:cursor-pointer" onClick={toggleFeedback}>
            Feedback History
          </p>
        </div>
      </section>

      {isFeedbackOpen && <Feedback toggle={toggleFeedback} />}
      <OrderHistory />
    </div>
  );
};

export default CustomerDetails;

import { useNavigate } from "react-router-dom";
import List from "./List";
import { Button } from "src/components/shared";
import { Plus } from "lucide-react";

const Orders = () => {
  const navigate = useNavigate();

  const addOrder = () => {
    navigate("/orders/addOrder");
  };

  return (
    <>
      <div className="flex justify-end mt-3">
        <Button variant="primary" className="flex" onClickHandler={addOrder}>
          <span className="bg-white rounded">
            <Plus color="#59150E" strokeWidth={3} />
          </span>
          <span className="ml-2">New Order</span>
        </Button>
      </div>

      <List />
    </>
  );
};

export default Orders;

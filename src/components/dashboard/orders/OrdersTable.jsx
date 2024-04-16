import { Avatar } from "@radix-ui/themes";
import { PencilLine } from "lucide-react";

const OrdersTable = ({
  customer,
  date,
  id,
  product,
  quantity,
  price,
  status,
  image,
}) => {
  return (
    <div className="grid grid-cols-8 border-b-2 border-b-grey-200 mb-4 px-4 py-4 items-center">
      <div className="col-span-2 flex items-center">
        <Avatar
          radius="full"
          src={image}
          fallback={customer.slice(0, 1)}
          color="purple"
        />
        <span className="ml-2">{customer}</span>
      </div>

      <div>{date}</div>
      <div>#{id}</div>
      <div>
        {quantity}
        {/* */} {product}
      </div>
      <div>{price}</div>
      <div
        className={`${
          status === "Cancelled"
            ? "text-[red]"
            : status === "Pending"
            ? "text-[#E7AF09]"
            : status === "In progress"
            ? "text-grey-500"
            : "text-[#01AA12]"
        }`}
      >
        {status}
      </div>
      <div className="hover:cursor-pointer">
        <PencilLine />
      </div>
    </div>
  );
};

export default OrdersTable;

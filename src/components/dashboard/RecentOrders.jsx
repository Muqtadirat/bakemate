import { Card } from "@radix-ui/themes";

const mockOrders = [
  {
    no: "01",
    id: "#1234567",
    product: "Cupcake",
    date: "03/04/24",
    status: "Pending",
  },
  {
    no: "02",
    id: "#1234567",
    product: "Cupcake",
    date: "03/04/24",
    status: "Completed",
  },
  {
    no: "03",
    id: "#1234567",
    product: "Cupcake",
    date: "03/04/24",
    status: "Pending",
  },
  {
    no: "04",
    id: "#1234567",
    product: "Cupcake",
    date: "03/04/24",
    status: "Cancelled",
  },
  {
    no: "05",
    id: "#1234567",
    product: "Cupcake",
    date: "03/04/24",
    status: "Completed",
  },
];

const RecentOrders = () => {
  return (
    <Card className="w-[725px] px-11">
      <h2 className="font-medium mt-5">Recent Orders</h2>

      <div className="grid grid-cols-5 font-medium border-b-2 bg-grey-100 border-b-grey-200 my-4 px-4 py-2 items-center">
        <p>NO</p>
        <p>Order ID</p>
        <p>Product</p>
        <p>Order Date</p>
        <p>Status</p>
      </div>

      {mockOrders.map((order) => (
        <div className="grid grid-cols-5 py-3 px-4" key={order.id}>
          <p>{order.no}</p>
          <p>{order.id}</p>
          <p>{order.product}</p>
          <p>{order.date}</p>
          <p
            className={`${
              order.status === "Pending"
                ? "text-[#E7AF09]"
                : order.status === "Cancelled"
                ? "text-[red]"
                : "text-[#5CB85C]"
            }`}
          >
            {order.status}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default RecentOrders;

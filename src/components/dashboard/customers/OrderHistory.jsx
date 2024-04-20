import { useEffect, useState } from "react";
import fetchOrders from "src/lib/api/fetchOrders";
import HistoryList from "./HistoryList";

const OrderHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchOrderHistory() {
      try {
        const data = await fetchOrders();
        setHistory(data);
      } catch (error) {
        console.log("Error fetching order history:", error);
      }
    }
    fetchOrderHistory();
  }, []);

  return (
    <div className="mt-10">
      <p className="font-medium text-xl">Order History</p>
      <div className="grid grid-cols-6 pb-5 border-b border-b-[#EEEEEE] mt-12 text-grey-400 font-medium">
        <p>Product</p>
        <p>Order ID</p>
        <p>Date</p>
        <p>Time</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>

      {history.map((order) => {
        return (
          <HistoryList
            key={order.id}
            product={order.product}
            price={order.price}
            id={order.id}
            date={order.date}
            time={order.time}
            quantity={order.quantity}
          />
        );
      })}
    </div>
  );
};

export default OrderHistory;

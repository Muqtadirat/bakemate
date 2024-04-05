import { useState, useEffect, useMemo } from "react";
import fetchOrders from "src/lib/api/fetchOrders";
import OrdersTable from "./OrdersTable";
import { Pagination } from "src/components/shared";
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";

const List = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentPages, setCurrentPages] = useState({});
  const ordersPerPage = 10;

  const tabs = [
    {
      id: "all",
      title: "All Orders",
    },
    {
      id: "completed",
      title: "Completed",
    },
    {
      id: "inProgress",
      title: "In progress",
    },
    {
      id: "pending",
      title: "Pending",
    },
    {
      id: "cancelled",
      title: "Cancelled",
    },
  ];

  const initializeCurrentPages = useMemo(() => {
    const initialCurrentPages = {};
    tabs.forEach((tab) => {
      initialCurrentPages[tab.id] = 0;
    });
    setCurrentPages(initialCurrentPages);
  }, []);

  useEffect(() => {
    async function fetchOrdersData() {
      try {
        const data = await fetchOrders();
        if (data && data.length > 0) {
          setOrders(data);
          initializeCurrentPages();
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrdersData();
  }, [initializeCurrentPages]);

  const filterOrdersByStatus = (orders, status) => {
    switch (status) {
      case "completed":
        return orders.filter((order) => order.status === "Completed");
      case "inProgress":
        return orders.filter((order) => order.status === "In progress");
      case "cancelled":
        return orders.filter((order) => order.status === "Cancelled");
      case "pending":
        return orders.filter((order) => order.status === "Pending");
      default:
        return orders;
    }
  };

  const handlePageChange = (selected, tabId) => {
    setCurrentPages((prevPages) => ({
      ...prevPages,
      [tabId]: selected.selected,
    }));
  };

  const getPageOrders = (tabId) => {
    const startIndex = currentPages[tabId] * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;
    return filterOrdersByStatus(orders, tabId).slice(startIndex, endIndex);
  };

  return (
    <>
      <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
        <TabList className="flex gap-8 mt-8 py-2">
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.id}
                id={tab.id}
                className={({ isSelected }) =>
                  isSelected
                    ? "hover:cursor-pointer px-4 font-medium text-primary-800 border-b-2 border-b-primary-800"
                    : "hover:cursor-pointer px-4"
                }
              >
                {tab.title}
              </Tab>
            );
          })}
        </TabList>

        {tabs.map((tab) => (
          <TabPanel key={tab.id} id={tab.id}>
            <div className="grid grid-cols-8 px-4 py-4 mt-4 border-b-2 border-b-grey-300  font-medium">
              <p className="col-span-2">Customer</p>
              <p>Order Date</p>
              <p>Order ID</p>
              <p>Product</p>
              <p>Qty</p>
              <p>Price</p>
              <p>Status</p>
            </div>

            {getPageOrders(tab.id).map((order) => (
              <OrdersTable
                customer={order.customer}
                date={order.date}
                id={order.id}
                product={order.product}
                quantity={order.quantity}
                price={order.price}
                status={order.status}
              />
            ))}
            <Pagination
              pageCount={Math.ceil(
                filterOrdersByStatus(orders, tab.id).length / ordersPerPage
              )}
              onPageChange={(selected) => handlePageChange(selected, tab.id)}
              currentPage={currentPages[tab.id]}
            />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default List;

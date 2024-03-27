import { useState } from "react";
import { GlobalContextProvider } from "src/contexts/GlobalContext";
import ProductTable from "./ProductsTable";
import { products } from "src/lib/constants";
import { CheckBox } from "src/components/shared";
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";

const List = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const filterProductsByStatus = (products, status) => {
    switch (status) {
      case "active":
        return products.filter((product) => product.status === "active");
      case "draft":
        return products.filter((product) => product.status === "draft");
      case "deleted":
        return products.filter((product) => product.status === "deleted");
      case "out":
        return products.filter((product) => product.stock === 0);
      case "low":
        return products.filter(
          (product) => product.stock > 0 && product.stock < 10
        );
      default:
        return products;
    }
  };

  const tabs = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "active",
      title: "Active",
    },
    {
      id: "draft",
      title: "Draft",
    },
    {
      id: "out",
      title: "Out of Stock",
    },
    {
      id: "low",
      title: "Low Stock",
    },
    {
      id: "deleted",
      title: "Deleted",
    },
  ];

  return (
    <GlobalContextProvider>
      <div>
        <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
          <TabList className="flex gap-28 justify-center mt-8 rounded-2xl px-8 py-2 border border-grey-200">
            {tabs.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  id={tab.id}
                  className={({ isSelected }) =>
                    isSelected
                      ? "bg-grey-200 rounded-2xl px-5 font-medium"
                      : "hover:bg-grey-200 hover:rounded-2xl px-5"
                  }
                >
                  {tab.title}
                </Tab>
              );
            })}
          </TabList>

          <TabPanel id={selectedTab}>
            <div className="grid grid-cols-9 px-4 py-4 mt-6 border-b-2 border-b-grey-300 bg-grey-100 font-medium">
              <CheckBox className="w-6 h-6 accent-primary-800 hover:cursor-pointer" />
              <p className="col-span-2">Product Name</p>
              <p>Category</p>
              <p>Price</p>
              <p>Stock</p>
              <p>Created</p>
              <p>Last Updated</p>
              <p>Action</p>
            </div>

            {filterProductsByStatus(products, selectedTab).map((product) => (
              <ProductTable
                key={product.id}
                product={product.name}
                price={product.price}
                stock={product.stock}
                category={product.category}
                created={product.created}
                lastUpdated={product.lastUpdated}
                image={product.image}
                checkId={product.id}
              />
            ))}
          </TabPanel>
          <TabPanel id="low"></TabPanel>
        </Tabs>
      </div>
    </GlobalContextProvider>
  );
};

export default List;

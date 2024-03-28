import { useState, useEffect } from "react";
import { GlobalContextProvider } from "src/contexts/GlobalContext";
import fetchProducts from "src/lib/api/fetchProducts";
import ProductTable from "./ProductsTable";
import { CheckBox } from "src/components/shared";
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";
import { Skeleton } from "@radix-ui/themes";

const List = () => {
  const [products, setProducts] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const data = await fetchProducts();
        if (data && data.length > 0) {
          setProducts(data);
          setLoading(false);
        } else {
          throw new Error("Products fetch failed");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(true);
      }
    }

    fetchProductsData();
  }, []);

  const filterProductsByStatus = (products, status) => {
    switch (status) {
      case "active":
        return products.filter((product) => product.stock >= 10);
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

  const itemCounter = (tabId) => {
    const filteredProducts = filterProductsByStatus(products, tabId);
    return filteredProducts.length;
  };

  return (
    <GlobalContextProvider>
      <div>
        <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
          <Skeleton loading={loading ? true : false}>
            <TabList className="flex gap-20 justify-center mt-8 rounded-2xl px-8 py-2 border border-grey-200">
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
                    {tab.title} ({itemCounter(tab.id)})
                  </Tab>
                );
              })}
            </TabList>
          </Skeleton>

          <TabPanel id={selectedTab}>
            <Skeleton loading={loading ? true : false}>
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
            </Skeleton>

            {filterProductsByStatus(products, selectedTab).map((product) => (
              <Skeleton key={product.id} loading={loading ? true : false}>
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
              </Skeleton>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </GlobalContextProvider>
  );
};

export default List;

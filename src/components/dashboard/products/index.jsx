import { useEffect, useState } from "react";
import { Button } from "src/components/shared";
import { Plus, Package } from "lucide-react";
import List from "./List";
import fetchProducts from "src/lib/api/fetchProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductsData();
  }, []);

  return (
    <div>
      <p className="text-primary-800 font-medium text-xl">Product List</p>

      {!products || products.length === 0 ? (
        <section className="flex flex-col items-center justify-center gap-3 bg-white border border-slate-300 h-[25rem] mt-8">
          <Package color="#ACA4A1" size={120} />
          <p>You do not have a product list yet</p>
          <p className="font-medium">
            Click on the button below to add your first product
          </p>
          <Button variant="primary" className="flex">
            <span className="bg-white rounded">
              <Plus color="#59150E" strokeWidth={3} />
            </span>
            <span className="ml-2">New Product</span>
          </Button>
        </section>
      ) : (
        <section>
          <div className="flex justify-end mb-12">
            <Button variant="primary" className="flex">
              <span className="bg-white rounded">
                <Plus color="#59150E" strokeWidth={3} />
              </span>
              <span className="ml-2">New Product</span>
            </Button>
          </div>
          <List />
        </section>
      )}
    </div>
  );
};

export default Products;

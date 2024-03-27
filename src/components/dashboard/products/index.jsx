import { Button } from "src/components/shared";
import { Plus, Package } from "lucide-react";
import List from "./List";

const Products = () => {
  return (
    <div>
      <p className="text-primary-800 font-medium text-xl">Product List</p>

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

      <List />
    </div>
  );
};

export default Products;

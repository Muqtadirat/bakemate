import { Card } from "@radix-ui/themes";

const mockProducts = [
  {
    no: 1,
    product: "Cupcake",
    orders: 50,
  },
  {
    no: 2,
    product: "Donut",
    orders: 40,
  },
  {
    no: 3,
    product: "Cookie",
    orders: 20,
  },
  {
    no: 4,
    product: "Croissant",
    orders: 18,
  },
  {
    no: 5,
    product: "Red velvet cake",
    orders: 12,
  },
];

const TopProducts = () => {
  return (
    <Card className="max-w-[309px] px-4 h-fit pb-6">
      <h2 className="font-medium mt-5 mb-9 text-center">Top Products</h2>

      {mockProducts.map((product) => (
        <div className="grid grid-cols-4 gap-x-4 my-2" key={product.no}>
          <p>{product.no}</p>
          <p className=" col-span-2">{product.product}</p>
          <p>{product.orders}</p>
        </div>
      ))}
    </Card>
  );
};

export default TopProducts;

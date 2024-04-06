import { Card } from "@radix-ui/themes";
import { TrendingDown, TrendingUp, Users2 } from "lucide-react";
import CustomersList from "./CustomersList";
import CustomerDetails from "./CustomerDetails";

const cardData = [
  {
    title: "Total Customers",
    value: "15,300",
    trend: 25,
    increase: true,
  },
  {
    title: "New Customers",
    value: "100",
    trend: 10,
    increase: true,
  },
  {
    title: "Active Customers",
    value: "15,150",
    trend: 25,
    increase: true,
  },
  {
    title: "Inactive Customers",
    value: "15,300",
    trend: 10,
    increase: false,
  },
];

const CustomerCard = ({ title, value, icon, trend, increase }) => {
  return (
    <Card color="blue" className="w-full py-2">
      <div>
        <div className="flex items-center justify-between border-b-2 border-b-[#DDDDDD] px-3 pb-4">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-[#AAAAAA]">{title}</p>
            <p className="font-semibold text-[26px]">{value}</p>
          </div>
          <div className="h-fit bg-[#ECF5E3] p-2 rounded-full">{icon}</div>
        </div>

        <div className="flex items-baseline justify-around text-sm">
          <div
            className={`${
              increase
                ? "text-[#5CB85C] bg-[#EAF6EA]"
                : "text-[red] bg-[#FED5D5]"
            } flex items-center mt-4 py-1 px-1 w-fit font-medium`}
          >
            <span className="mr-1">
              {increase ? (
                <TrendingUp height={16} />
              ) : (
                <TrendingDown height={16} />
              )}
            </span>
            {increase ? `+${trend}` : `-${trend}`}%
          </div>
          <p className="text-[#AAAAAA]">From the last month</p>
        </div>
      </div>
    </Card>
  );
};

const Customers = () => {
  return (
    <>
      <div className="flex gap-5 justify-center mt-6">
        {cardData.map((data) => {
          return (
            <CustomerCard
              key={data.title}
              title={data.title}
              value={data.value}
              trend={data.trend}
              increase={data.increase}
              icon={<Users2 />}
            />
          );
        })}
      </div>

      <CustomersList />
      {/* <CustomerDetails /> */}
    </>
  );
};

export default Customers;

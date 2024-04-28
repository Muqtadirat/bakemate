import { Card } from "@radix-ui/themes";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 10 },
  { name: "Group B", value: 20 },
  { name: "Group C", value: 70 },
];
const COLORS = ["#F6C1AE", "#F28B50", "#BF6A38"];

const OrdersPieChart = () => {
  return (
    <Card className="bg-white w-[390px] h-[336px] flex justify-center">
      <h2 className="ml-10 mt-5 font-medium">Orders Report</h2>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={172}
          cy="30%"
          innerRadius={60}
          outerRadius={80}
          label="name"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <p>sss</p>
    </Card>
  );
};

export default OrdersPieChart;

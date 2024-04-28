import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  //   ResponsiveContainer,
} from "recharts";
import { Card } from "@radix-ui/themes";

const data = [
  { month: "January", value: 9 },
  { month: "February", value: 4 },
  { month: "March", value: 6 },
  { month: "April", value: 7 },
  { month: "May", value: 2 },
  { month: "June", value: 4 },
  { month: "July", value: 1 },
  { month: "August", value: 3 },
  { month: "September", value: 4 },
  { month: "October", value: 5 },
  { month: "November", value: 5 },
  { month: "December", value: 2 },
];

const SalesBarChart = () => {
  return (
    <Card className="bg-white w-[648px] h-[336px]">
      <h2 className="ml-10 my-5 font-medium">Sales Analytics</h2>
      <BarChart
        width={595}
        height={260}
        data={data}
        margin={{
          top: 5,
          // right: 30,
          // left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" className="text-sm font-medium" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          fill="#59150E"
          activeBar={<Rectangle fill="#F28B50" stroke="blue" />}
        />
      </BarChart>
    </Card>
  );
};

export default SalesBarChart;

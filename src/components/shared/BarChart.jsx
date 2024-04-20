import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
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
    <Card className="border bg-white">
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          fill="#8C4C26"
          activeBar={<Rectangle fill="#F28B50" stroke="blue" />}
        />
      </BarChart>
    </Card>
  );
};

export default SalesBarChart;
